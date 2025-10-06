export interface IResFloor {
    data:       Datum[];
    page:       number;
    pageSize:   number;
    total:      number;
    totalPages: number;
    hasNext:    boolean;
    hasPrev:    boolean;
}

export interface Datum {
    id:           number;
    nombre:       string;
    descripcion:  string;
    categoria:    string;
    precio:       string;
    stock:        number;
    imagenUrl:    string;
    oferta:       Oferta | null;
    precioFinal?: string;
}

export interface Oferta {
    id:          number;
    nombre:      string;
    descuento:   string;
    fechaInicio: Date;
    fechaFin:    Date;
}
