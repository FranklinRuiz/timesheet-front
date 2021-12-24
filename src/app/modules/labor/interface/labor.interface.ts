export interface ILabor {
    idLabor: number;
    nombre: string;
    block: string;
    veta: string;
    tajo: string;
    nivel: string;
    faseP: string;
    faseS: string;
    hv: string;
    seccion: string;
    ptoCardinal: string;
    und: string;
    ruta: string;
    referencia: string;
    tavance: string;
    tlabor: string;
    abrev: string;
    md: string;
    este: number;
    norte: number;
    cantidad: string;
}



export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort2 {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface LaboresPage {
    content: ILabor[];
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    numbers: number;
    sort: Sort2;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
