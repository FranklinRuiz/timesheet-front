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
    }
];