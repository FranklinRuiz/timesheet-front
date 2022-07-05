export interface DataResponse{
    traceId: string,
    data: any 
}

export interface IndPersonas{ 
    total: number,
    hombres: number,
    mujeres: number
}
  
export interface IndPersonasPorArea{
    area: string,
    cantidad: number, 
}
  
export interface IndHorasPorSede{
    sede: string,
    htrabajadas: string, 
    hextra: string, 
    htardanza: string, 
}