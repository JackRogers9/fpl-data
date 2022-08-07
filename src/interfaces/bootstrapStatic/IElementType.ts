export interface IElementType {
    id: number;
    pluralName: string;
    pluralNameShort: string;
    singularName: string;
    singularNameShort: string;
    squadSelect: number;
    squadMinPlay: number;
    squadMaxPlay: number;
    uiShirtSpecific: boolean;
    subPositionsLocked: number[];
    elementCount: number;
}
