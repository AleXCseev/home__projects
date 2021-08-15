import { FieldError } from 'react-hook-form';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isEditable?: boolean;
    raiting: number,
    setRaiting?: (raiting: number) => void,
    error?: FieldError;
}