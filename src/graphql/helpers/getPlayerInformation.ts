import { IElement } from '../../interfaces/src';

export const getPlayerInformation = (elements: IElement[], elementId: number):
    IElement | undefined => {
    return elements.find((element: IElement) => element.id === elementId);
};
