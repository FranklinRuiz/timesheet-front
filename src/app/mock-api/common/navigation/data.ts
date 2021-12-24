/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'labor',
        title: 'Labores',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/labor'
    },
    {
        id   : 'medicion',
        title: 'Medición Avances',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/avance'
    }
];