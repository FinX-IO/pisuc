/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PisucCreateFormInputValues = {
    pisuc?: string;
    currency?: string;
    country?: string;
    instrumentClass?: string;
    instrumentType?: string;
    instrumentDates?: string;
    instrumentProps?: string;
    createDate?: string;
};
export declare type PisucCreateFormValidationValues = {
    pisuc?: ValidationFunction<string>;
    currency?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    instrumentClass?: ValidationFunction<string>;
    instrumentType?: ValidationFunction<string>;
    instrumentDates?: ValidationFunction<string>;
    instrumentProps?: ValidationFunction<string>;
    createDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PisucCreateFormOverridesProps = {
    PisucCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pisuc?: PrimitiveOverrideProps<TextFieldProps>;
    currency?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    instrumentClass?: PrimitiveOverrideProps<TextFieldProps>;
    instrumentType?: PrimitiveOverrideProps<TextFieldProps>;
    instrumentDates?: PrimitiveOverrideProps<TextFieldProps>;
    instrumentProps?: PrimitiveOverrideProps<TextFieldProps>;
    createDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PisucCreateFormProps = React.PropsWithChildren<{
    overrides?: PisucCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PisucCreateFormInputValues) => PisucCreateFormInputValues;
    onSuccess?: (fields: PisucCreateFormInputValues) => void;
    onError?: (fields: PisucCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PisucCreateFormInputValues) => PisucCreateFormInputValues;
    onValidate?: PisucCreateFormValidationValues;
} & React.CSSProperties>;
export default function PisucCreateForm(props: PisucCreateFormProps): React.ReactElement;
