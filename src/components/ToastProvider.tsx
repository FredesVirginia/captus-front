import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import type { IconType } from 'react-icons';
import { GrStatusGood } from "react-icons/gr";
import { IoIosCloseCircle, IoMdInformationCircle } from "react-icons/io";
import { IoWarningSharp } from "react-icons/io5";

type ToastType = 'error' | 'success' | 'info' | 'warning';

export interface ToastOptions {
  id?: string;
  type?: ToastType;
  duration?: number; // ms
  persistentOnHover?: boolean;
}

interface ToastData {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  persistentOnHover: boolean;
}

interface ToastContextValue {
  show: (message: string, options?: ToastOptions) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

const ToastItem = ({ toast, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) => {
  const [hover, setHover] = useState(false);
  const startRef = useRef<number>(performance.now());
  const elapsedRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    const now = performance.now();
    const delta = now - startRef.current;
    startRef.current = now;
    if (!hover) {
      elapsedRef.current += delta;
    }
    if (elapsedRef.current >= toast.duration) {
      onDismiss(toast.id);
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [hover, toast.duration, toast.id, onDismiss]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const typeStyles = useMemo(() => {
    switch (toast.type) {
      case 'error':
        return { container: 'tn-toast tn-toast-error' };
      case 'success':
        return { container: 'tn-toast tn-toast-success' };
      case 'warning':
        return { container: 'tn-toast tn-toast-warning' };
      default:
        return { container: 'tn-toast tn-toast-info' };
    }
  }, [toast.type]);

  const typeIcon: { Icon: IconType; color: string } = useMemo(() => {
    switch (toast.type) {
      case 'error':
        return { Icon: IoIosCloseCircle, color: '#FFFFFF' };
      case 'success':
        return { Icon: GrStatusGood, color: '#FFFFFF' };
      case 'warning':
        return { Icon: IoWarningSharp,  color: '#FFFFFF' };
      default:
        return { Icon: IoMdInformationCircle, color: '#FFFFFF' };
    }
  }, [toast.type]);

  return (
    <div
      className={typeStyles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="status"
    >
      <span
        aria-hidden
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
         
          flex: '0 0 auto'
        }}
      >
        <typeIcon.Icon size={18} color={typeIcon.color} />
      </span>
      <p className="tn-toast-message">{toast.message}</p>
      <button className="tn-toast-close" onClick={() => onDismiss(toast.id)} aria-label="Cerrar">×</button>
    </div>
  );
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const overlayRoot = useMemo(() => {
    let el = document.getElementById('tn-toast-root');
    if (!el) {
      el = document.createElement('div');
      el.id = 'tn-toast-root';
      document.body.appendChild(el);
    }
    return el;
  }, []);

  const show = useCallback((message: string, options?: ToastOptions) => {
    const id = options?.id || Math.random().toString(36).slice(2);
    const toast: ToastData = {
      id,
      message,
      type: options?.type || 'info',
      duration: options?.duration ?? 4000,
      persistentOnHover: options?.persistentOnHover ?? true,
    };
    setToasts(prev => [...prev, toast]);
    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const ctx: ToastContextValue = useMemo(() => ({ show, dismiss }), [show, dismiss]);

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      {overlayRoot && createPortal(
        <div className="tn-toast-overlay" aria-live="polite" aria-atomic="false">
          {toasts.map(t => (
            <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
          ))}
        </div>,
        overlayRoot
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;