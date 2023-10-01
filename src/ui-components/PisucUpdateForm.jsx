/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Pisuc } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PisucUpdateForm(props) {
  const {
    id: idProp,
    pisuc: pisucModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pisuc: "",
    currency: "",
    country: "",
    instrumentClass: "",
    instrumentType: "",
    instrumentDates: "",
    instrumentProps: "",
    createDate: "",
  };
  const [pisuc, setPisuc] = React.useState(initialValues.pisuc);
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [country, setCountry] = React.useState(initialValues.country);
  const [instrumentClass, setInstrumentClass] = React.useState(
    initialValues.instrumentClass
  );
  const [instrumentType, setInstrumentType] = React.useState(
    initialValues.instrumentType
  );
  const [instrumentDates, setInstrumentDates] = React.useState(
    initialValues.instrumentDates
  );
  const [instrumentProps, setInstrumentProps] = React.useState(
    initialValues.instrumentProps
  );
  const [createDate, setCreateDate] = React.useState(initialValues.createDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pisucRecord
      ? { ...initialValues, ...pisucRecord }
      : initialValues;
    setPisuc(cleanValues.pisuc);
    setCurrency(cleanValues.currency);
    setCountry(cleanValues.country);
    setInstrumentClass(cleanValues.instrumentClass);
    setInstrumentType(cleanValues.instrumentType);
    setInstrumentDates(cleanValues.instrumentDates);
    setInstrumentProps(cleanValues.instrumentProps);
    setCreateDate(cleanValues.createDate);
    setErrors({});
  };
  const [pisucRecord, setPisucRecord] = React.useState(pisucModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Pisuc, idProp)
        : pisucModelProp;
      setPisucRecord(record);
    };
    queryData();
  }, [idProp, pisucModelProp]);
  React.useEffect(resetStateValues, [pisucRecord]);
  const validations = {
    pisuc: [{ type: "Required" }],
    currency: [{ type: "Required" }],
    country: [{ type: "Required" }],
    instrumentClass: [{ type: "Required" }],
    instrumentType: [{ type: "Required" }],
    instrumentDates: [{ type: "Required" }],
    instrumentProps: [{ type: "Required" }],
    createDate: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          pisuc,
          currency,
          country,
          instrumentClass,
          instrumentType,
          instrumentDates,
          instrumentProps,
          createDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Pisuc.copyOf(pisucRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PisucUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pisuc"
        isRequired={true}
        isReadOnly={false}
        value={pisuc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc: value,
              currency,
              country,
              instrumentClass,
              instrumentType,
              instrumentDates,
              instrumentProps,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.pisuc ?? value;
          }
          if (errors.pisuc?.hasError) {
            runValidationTasks("pisuc", value);
          }
          setPisuc(value);
        }}
        onBlur={() => runValidationTasks("pisuc", pisuc)}
        errorMessage={errors.pisuc?.errorMessage}
        hasError={errors.pisuc?.hasError}
        {...getOverrideProps(overrides, "pisuc")}
      ></TextField>
      <TextField
        label="Currency"
        isRequired={true}
        isReadOnly={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency: value,
              country,
              instrumentClass,
              instrumentType,
              instrumentDates,
              instrumentProps,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency,
              country: value,
              instrumentClass,
              instrumentType,
              instrumentDates,
              instrumentProps,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Instrument class"
        isRequired={true}
        isReadOnly={false}
        value={instrumentClass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency,
              country,
              instrumentClass: value,
              instrumentType,
              instrumentDates,
              instrumentProps,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.instrumentClass ?? value;
          }
          if (errors.instrumentClass?.hasError) {
            runValidationTasks("instrumentClass", value);
          }
          setInstrumentClass(value);
        }}
        onBlur={() => runValidationTasks("instrumentClass", instrumentClass)}
        errorMessage={errors.instrumentClass?.errorMessage}
        hasError={errors.instrumentClass?.hasError}
        {...getOverrideProps(overrides, "instrumentClass")}
      ></TextField>
      <TextField
        label="Instrument type"
        isRequired={true}
        isReadOnly={false}
        value={instrumentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency,
              country,
              instrumentClass,
              instrumentType: value,
              instrumentDates,
              instrumentProps,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.instrumentType ?? value;
          }
          if (errors.instrumentType?.hasError) {
            runValidationTasks("instrumentType", value);
          }
          setInstrumentType(value);
        }}
        onBlur={() => runValidationTasks("instrumentType", instrumentType)}
        errorMessage={errors.instrumentType?.errorMessage}
        hasError={errors.instrumentType?.hasError}
        {...getOverrideProps(overrides, "instrumentType")}
      ></TextField>
      <TextField
        label="Instrument dates"
        isRequired={true}
        isReadOnly={false}
        value={instrumentDates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency,
              country,
              instrumentClass,
              instrumentType,
              instrumentDates: value,
              instrumentProps,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.instrumentDates ?? value;
          }
          if (errors.instrumentDates?.hasError) {
            runValidationTasks("instrumentDates", value);
          }
          setInstrumentDates(value);
        }}
        onBlur={() => runValidationTasks("instrumentDates", instrumentDates)}
        errorMessage={errors.instrumentDates?.errorMessage}
        hasError={errors.instrumentDates?.hasError}
        {...getOverrideProps(overrides, "instrumentDates")}
      ></TextField>
      <TextField
        label="Instrument props"
        isRequired={true}
        isReadOnly={false}
        value={instrumentProps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency,
              country,
              instrumentClass,
              instrumentType,
              instrumentDates,
              instrumentProps: value,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.instrumentProps ?? value;
          }
          if (errors.instrumentProps?.hasError) {
            runValidationTasks("instrumentProps", value);
          }
          setInstrumentProps(value);
        }}
        onBlur={() => runValidationTasks("instrumentProps", instrumentProps)}
        errorMessage={errors.instrumentProps?.errorMessage}
        hasError={errors.instrumentProps?.hasError}
        {...getOverrideProps(overrides, "instrumentProps")}
      ></TextField>
      <TextField
        label="Create date"
        isRequired={true}
        isReadOnly={false}
        value={createDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pisuc,
              currency,
              country,
              instrumentClass,
              instrumentType,
              instrumentDates,
              instrumentProps,
              createDate: value,
            };
            const result = onChange(modelFields);
            value = result?.createDate ?? value;
          }
          if (errors.createDate?.hasError) {
            runValidationTasks("createDate", value);
          }
          setCreateDate(value);
        }}
        onBlur={() => runValidationTasks("createDate", createDate)}
        errorMessage={errors.createDate?.errorMessage}
        hasError={errors.createDate?.hasError}
        {...getOverrideProps(overrides, "createDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pisucModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pisucModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
