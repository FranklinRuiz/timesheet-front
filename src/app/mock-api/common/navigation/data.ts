/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'cargo',
        title: 'Cargos',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/cargo'
    },
    {
        id   : 'tipoTrabajo',
        title: 'Tipos de Trabajos',
        type : 'basic',
        icon : 'heroicons_outline:office-building',
        link : '/tipoTrabajo'
    },
    {
        id   : 'diaFestivo',
        title: 'Dias Festivos',
        type : 'basic',
        icon : 'heroicons_outline:calendar',
        link : '/diaFestivo'//URL
    },
    {
        id   : 'horario',
        title: 'Horarios',
        type : 'basic',
        icon : 'heroicons_outline:clock',
        link : '/horario'//URL
    },
    {
        id: 'personas',
        title: 'Personas' ,
        type : 'basic',
        icon : 'heroicons_outline:user',
        link : '/personas'
    }
];