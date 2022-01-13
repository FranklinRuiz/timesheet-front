 

export interface ITipoTrabajo {
    idTipoTrabajo: number;
    abreviatura: string;
    nombreTipoTrabajo: string;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Sort2 {
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

export interface TipoTrabajoPage {
    data: TipoTrabajoPage;
    content: ITipoTrabajo[];
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