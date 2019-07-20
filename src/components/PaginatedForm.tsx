import React, { useState, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import * as Inputs from './Inputs';

export default function PaginatedForm(props: PaginatedFormProps): JSX.Element {
  const {
    sections,
    entity,
    data,
    updateData,
    onSubmit,
    width = '100%',
    viewer,
  } = props;
  const [activeKey, setActiveKey] = useState<number>(0);
  const [errors, setErrors] = useState<boolean[][]>(
    sections.map(s => Array(s.inputs.length).fill(false)),
  );
  const findErrors = (i?: number) =>
    JSON.stringify(i === undefined ? errors : errors[i]).includes('true');
  const handleInputValidityChange = useCallback(
    (isValid: boolean, section: number, input: number) => {
      setErrors(errs => {
        const e = [...errs];
        e[section][input] = !isValid;
        return e;
      });
    },
    [JSON.stringify(errors)],
  );
  const newSections = [
    ...sections,
    {
      label: 'Finalizar',
      inputs: [
        {
          inputType: 'Submital',
          onSubmit,
          label: '',
          isValid: !findErrors(),
          entity,
        },
      ],
    },
  ] as PaginatedFormSection[];
  return (
    <div style={{ width }}>
      <Tab.Container
        id='left-tabs-example'
        defaultActiveKey={activeKey}
        onSelect={eventKey => setActiveKey(eventKey)}
      >
        <Row>
          <Col xs='12' sm='6' md='5' lg='3' style={{ marginBottom: '20px' }}>
            {newSections.map(({ label }, index) => (
              <Nav
                key={`FORM_LABEL_${index}`}
                variant='pills'
                className='flex-column'
              >
                <Nav.Item>
                  <Row noGutters style={{ paddingBottom: 5 }}>
                    <Col xs='auto'>
                      <div
                        className={`FORM_LABEL_${index}`}
                        style={{
                          width: 30,
                          padding: '.5rem 0.75rem',
                          color: 'white',
                          backgroundColor: 'red',
                          fontWeight: 'bold',
                          borderRadius: 15,
                          marginRight: 8,
                          opacity: Number(
                            Boolean(
                              index < sections.length && findErrors(index),
                            ),
                          ),
                        }}
                      >
                        &#33;
                      </div>
                    </Col>
                    <Col>
                      <Nav.Link eventKey={index}>{label}</Nav.Link>
                    </Col>
                  </Row>
                </Nav.Item>
              </Nav>
            ))}
          </Col>
          <Col
            xs='12'
            sm='6'
            md='7'
            lg='4'
            style={{ marginBottom: '20px', zIndex: 2 }}
          >
            <Tab.Content>
              {newSections.map(({ inputs }, index) => (
                <Tab.Pane key={`FORM_INPUT_${index}`} eventKey={index}>
                  {inputs.map((paginatedInput, i) => {
                    const {
                      inputType = 'Text',
                      valuePath,
                      required,
                      label,
                      validation: inputValidation = [],
                      options = [],
                      rows = 1,
                      appendices = [],
                      type = 'prefix',
                      sizeKb = 200,
                      ...rest
                    } = paginatedInput;
                    const validation =
                      String(required) != 'undefined'
                        ? inputValidation
                        : [
                            ...inputValidation,
                            {
                              validate: (value: string) => !(value === ''),
                              invalidMessage: `Valor de ${String(
                                label,
                              ).toLowerCase()} no puede estar vacío`,
                            },
                          ];
                    const InputComponenet = Inputs[inputType];
                    const props = {
                      ...rest,
                      options,
                      rows,
                      appendices,
                      type,
                      sizeKb,
                      validation,
                      label,
                      onValidationStateChange: (isValid: boolean) =>
                        handleInputValidityChange(isValid, index, i),
                      value: data[valuePath],
                      onChange: (value: any) => updateData(valuePath, value),
                    };
                    return (
                      <InputComponenet {...props} key={`INPUT_${index}_${i}`} />
                    );
                  })}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
          <Col
            xs='12'
            sm='12'
            md='12'
            lg='5'
            // style={{ maxWidth: 600 }}
          >
            {viewer && viewer(Number(activeKey), errors)}
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
