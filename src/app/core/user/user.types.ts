export interface User {
    idUsuario: number;
    usuario: string;
    nombre: string;
    correo: string;
    avatar?: string;
    estado?: string;
    authorities?:any [];
}
