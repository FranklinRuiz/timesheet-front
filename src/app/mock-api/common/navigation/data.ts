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
        title: 'Tipo de Trabajo',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/tipoTrabajo'
    }
];