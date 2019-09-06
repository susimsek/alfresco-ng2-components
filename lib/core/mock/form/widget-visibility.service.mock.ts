/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FormModel, FormValues } from '../../form/components/widgets/core/index';

export let formTest = new FormModel({});

export let fakeTaskProcessVariableModels = [
    { id:   'TEST_VAR_1', type:   'string', value:   'test_value_1' },
    { id:   'TEST_VAR_2', type:   'string', value:   'test_value_2' },
    { id:   'TEST_VAR_3', type:   'string', value:   'test_value_3' }
];

export let formValues:   FormValues = {
    'test_1':   'value_1',
    'test_2':   'value_2',
    'test_3':   'value_1',
    'test_4':   'dropdown_id',
    'test_5':   'dropdown_label',
    'dropdown':   { 'id':   'dropdown_id', 'name':   'dropdown_label' }
};

export let fakeFormJson = {
    id:   '9999',
    name:   'FORM_VISIBILITY',
    processDefinitionId:   'PROCESS_TEST:  9:  9999',
    processDefinitionName:   'PROCESS_TEST',
    processDefinitionKey:   'PROCESS_TEST',
    taskId:   '999',
    taskName:   'TEST',
    fields:   [
        {
            fieldType:   'ContainerRepresentation',
            id:   '000000000000000000',
            name:   'Label',
            type:   'container',
            value:   null,
            numberOfColumns:   2,
            fields:   {
                1:   [
                    {
                        fieldType:   'FormFieldRepresentation',
                        id:   'FIELD_TEST',
                        name:   'FIELD_TEST',
                        type:   'text',
                        value:   'RIGHT_FORM_FIELD_VALUE',
                        visibilityCondition:   null,
                        isVisible:   true
                    },
                    {
                        fieldType:   'FormFieldRepresentation',
                        id:   'FIELD_WITH_CONDITION',
                        name:   'FIELD_WITH_CONDITION',
                        type:   'text',
                        value:   'field_with_condition_value',
                        visibilityCondition:   null,
                        isVisible:   true
                    },
                    {
                        fieldType:   'FormFieldRepresentation',
                        id:   'LEFT_FORM_FIELD_ID',
                        name:   'LEFT_FORM_FIELD_NAME',
                        type:   'text',
                        value:   'LEFT_FORM_FIELD_VALUE',
                        visibilityCondition:   null,
                        isVisible:   true
                    }
                ],
                2:   [
                    {
                        fieldType:   'FormFieldRepresentation',
                        id:   'RIGHT_FORM_FIELD_ID',
                        name:   'RIGHT_FORM_FIELD_NAME',
                        type:   'text',
                        value:   'RIGHT_FORM_FIELD_VALUE',
                        visibilityCondition:   null,
                        isVisible:   true
                    }
                ]
            }
        }
    ],
    variables:   [
        {
            'id':   'e621e8ff-42a6-499c-8121-33c7c35d8641',
            'name':   'age',
            'type':   'integer',
            'value':   11
        },
        {
            'id':   '4f8aa99e-8526-429c-9d99-809978489d96',
            'name':   'name',
            'type':   'string',
            'value':   'abc'
        },
        {
            'id':   '0207b649-ff07-4f3a-a589-d10afa507b9b',
            'name':   'dob',
            'type':   'date',
            'value':   '2019-05-13'
        }
    ]
};

export let fakeVisibilityFormJson = {
    id:   '9999',
    name:   'FORM_VISIBILITY',
    processDefinitionId:   'PROCESS_TEST:  9:  9999',
    processDefinitionName:   'PROCESS_TEST',
    processDefinitionKey:   'PROCESS_TEST',
    taskId:   '999',
    taskName:   'TEST',
    fields:   [
        {
            fieldType:   'ContainerRepresentation',
            id:   '000000000000000000',
            name:   'Label',
            type:   'container',
            value:   null,
            numberOfColumns:   2,
            fields:   {
                1:   [
                    {
                        fieldType:   'FormFieldRepresentation',
                        id:   'FIELD_TEST',
                        name:   'FIELD_TEST',
                        type:   'text',
                        value:   'RIGHT_FORM_FIELD_VALUE',
                        visibilityCondition:   {
                            leftFormFieldId:   'NUMBER_FIELD',
                            leftRestResponseId:   null,
                            operator:   '<',
                            rightValue:   '60',
                            rightType:   'value',
                            rightFormFieldId:   '',
                            rightRestResponseId:   '',
                            nextConditionOperator:   '',
                            nextCondition:   null
                        },
                        isVisible:   true
                    },
                    {
                        fieldType:   'FormFieldRepresentation',
                        id:   'NUMBER_FIELD',
                        name:   'FIELD_WITH_CONDITION',
                        type:   'integer',
                        value:   '59',
                        visibilityCondition:   null,
                        isVisible:   true
                    }
                ]
            }
        }
    ]
};

export let complexVisibilityJsonVisible = {
    'id':   47591,
    'name':   'Test-visibility',
    'description':   '',
    'version':   4,
    'lastUpdatedBy':   13,
    'lastUpdatedByFullName':   'romano romano',
    'lastUpdated':   '2019-06-11T11:  04:  36.870+0000',
    'stencilSetId':   0,
    'referenceId':   null,
    'formDefinition':   {
        'tabs':   [],
        'fields':   [{
            'fieldType':   'ContainerRepresentation',
            'id':   '1560246123312',
            'name':   'Label',
            'type':   'container',
            'value':   null,
            'required':   false,
            'readOnly':   false,
            'overrideId':   false,
            'colspan':   1,
            'placeholder':   null,
            'minLength':   0,
            'maxLength':   0,
            'minValue':   null,
            'maxValue':   null,
            'regexPattern':   null,
            'optionType':   null,
            'hasEmptyValue':   null,
            'options':   null,
            'restUrl':   null,
            'restResponsePath':   null,
            'restIdProperty':   null,
            'restLabelProperty':   null,
            'tab':   null,
            'className':   null,
            'dateDisplayFormat':   null,
            'layout':   null,
            'sizeX':   2,
            'sizeY':   1,
            'row':   -1,
            'col':   -1,
            'visibilityCondition':   null,
            'numberOfColumns':   2,
            'fields':   {
                '1':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label',
                    'name':   'Label',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   2 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }],
                '2':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label1',
                    'name':   'Label1',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   1 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }]
            }
        }, {
            'fieldType':   'ContainerRepresentation',
            'id':   '1560246128696',
            'name':   'Label',
            'type':   'container',
            'value':   null,
            'required':   false,
            'readOnly':   false,
            'overrideId':   false,
            'colspan':   1,
            'placeholder':   null,
            'minLength':   0,
            'maxLength':   0,
            'minValue':   null,
            'maxValue':   null,
            'regexPattern':   null,
            'optionType':   null,
            'hasEmptyValue':   null,
            'options':   null,
            'restUrl':   null,
            'restResponsePath':   null,
            'restIdProperty':   null,
            'restLabelProperty':   null,
            'tab':   null,
            'className':   null,
            'dateDisplayFormat':   null,
            'layout':   null,
            'sizeX':   2,
            'sizeY':   1,
            'row':   -1,
            'col':   -1,
            'visibilityCondition':   null,
            'numberOfColumns':   2,
            'fields':   {
                '1':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label4',
                    'name':   'Label4',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   2 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }],
                '2':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label3',
                    'name':   'Label3',
                    'type':   'text',
                    'value':   '',
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   1 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }]
            }
        }, {
            'fieldType':   'ContainerRepresentation',
            'id':   '1560246126964',
            'name':   'Label',
            'type':   'container',
            'value':   null,
            'required':   false,
            'readOnly':   false,
            'overrideId':   false,
            'colspan':   1,
            'placeholder':   null,
            'minLength':   0,
            'maxLength':   0,
            'minValue':   null,
            'maxValue':   null,
            'regexPattern':   null,
            'optionType':   null,
            'hasEmptyValue':   null,
            'options':   null,
            'restUrl':   null,
            'restResponsePath':   null,
            'restIdProperty':   null,
            'restLabelProperty':   null,
            'tab':   null,
            'className':   null,
            'dateDisplayFormat':   null,
            'layout':   null,
            'sizeX':   2,
            'sizeY':   1,
            'row':   -1,
            'col':   -1,
            'visibilityCondition':   null,
            'numberOfColumns':   2,
            'fields':   {
                '1':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label2',
                    'name':   'Label2',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   2 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }],
                '2':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label5',
                    'name':   'Label5',
                    'type':   'boolean',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   1 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   {
                        'leftFormFieldId':   'label',
                        'leftRestResponseId':   null,
                        'operator':   '==',
                        'rightValue':   'aaa',
                        'rightType':   null,
                        'rightFormFieldId':   '',
                        'rightRestResponseId':   '',
                        'nextConditionOperator':   'and',
                        'nextCondition':   {
                            'leftFormFieldId':   'label1',
                            'leftRestResponseId':   null,
                            'operator':   '!=',
                            'rightValue':   'aaa',
                            'rightType':   null,
                            'rightFormFieldId':   '',
                            'rightRestResponseId':   '',
                            'nextConditionOperator':   'and',
                            'nextCondition':   {
                                'leftFormFieldId':   'label2',
                                'leftRestResponseId':   null,
                                'operator':   '!empty',
                                'rightValue':   null,
                                'rightType':   null,
                                'rightFormFieldId':   '',
                                'rightRestResponseId':   '',
                                'nextConditionOperator':   'or',
                                'nextCondition':   {
                                    'leftFormFieldId':   'label3',
                                    'leftRestResponseId':   null,
                                    'operator':   'empty',
                                    'rightValue':   null,
                                    'rightType':   null,
                                    'rightFormFieldId':   '',
                                    'rightRestResponseId':   '',
                                    'nextConditionOperator':   null,
                                    'nextCondition':   null
                                }
                            }
                        }
                    }
                }]
            }
        }],
        'outcomes':   [],
        'javascriptEvents':   [],
        'className':   '',
        'style':   '',
        'customFieldTemplates':   {},
        'metadata':   {},
        'variables':   [],
        'customFieldsValueInfo':   {},
        'gridsterForm':   false
    }
};
export let complexVisibilityJsonNotVisible = {
    'id':   47591,
    'name':   'Test-visibility',
    'description':   '',
    'version':   4,
    'lastUpdatedBy':   13,
    'lastUpdatedByFullName':   'romano romano',
    'lastUpdated':   '2019-06-11T11:  04:  36.870+0000',
    'stencilSetId':   0,
    'referenceId':   null,
    'formDefinition':   {
        'tabs':   [],
        'fields':   [{
            'fieldType':   'ContainerRepresentation',
            'id':   '1560246123312',
            'name':   'Label',
            'type':   'container',
            'value':   null,
            'required':   false,
            'readOnly':   false,
            'overrideId':   false,
            'colspan':   1,
            'placeholder':   null,
            'minLength':   0,
            'maxLength':   0,
            'minValue':   null,
            'maxValue':   null,
            'regexPattern':   null,
            'optionType':   null,
            'hasEmptyValue':   null,
            'options':   null,
            'restUrl':   null,
            'restResponsePath':   null,
            'restIdProperty':   null,
            'restLabelProperty':   null,
            'tab':   null,
            'className':   null,
            'dateDisplayFormat':   null,
            'layout':   null,
            'sizeX':   2,
            'sizeY':   1,
            'row':   -1,
            'col':   -1,
            'visibilityCondition':   null,
            'numberOfColumns':   2,
            'fields':   {
                '1':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label',
                    'name':   'Label',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   2 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }],
                '2':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label1',
                    'name':   'Label1',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   1 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }]
            }
        }, {
            'fieldType':   'ContainerRepresentation',
            'id':   '1560246128696',
            'name':   'Label',
            'type':   'container',
            'value':   null,
            'required':   false,
            'readOnly':   false,
            'overrideId':   false,
            'colspan':   1,
            'placeholder':   null,
            'minLength':   0,
            'maxLength':   0,
            'minValue':   null,
            'maxValue':   null,
            'regexPattern':   null,
            'optionType':   null,
            'hasEmptyValue':   null,
            'options':   null,
            'restUrl':   null,
            'restResponsePath':   null,
            'restIdProperty':   null,
            'restLabelProperty':   null,
            'tab':   null,
            'className':   null,
            'dateDisplayFormat':   null,
            'layout':   null,
            'sizeX':   2,
            'sizeY':   1,
            'row':   -1,
            'col':   -1,
            'visibilityCondition':   null,
            'numberOfColumns':   2,
            'fields':   {
                '1':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label4',
                    'name':   'Label4',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   2 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }],
                '2':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label3',
                    'name':   'Label3',
                    'type':   'text',
                    'value':   'OPSSS',
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   1 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }]
            }
        }, {
            'fieldType':   'ContainerRepresentation',
            'id':   '1560246126964',
            'name':   'Label',
            'type':   'container',
            'value':   null,
            'required':   false,
            'readOnly':   false,
            'overrideId':   false,
            'colspan':   1,
            'placeholder':   null,
            'minLength':   0,
            'maxLength':   0,
            'minValue':   null,
            'maxValue':   null,
            'regexPattern':   null,
            'optionType':   null,
            'hasEmptyValue':   null,
            'options':   null,
            'restUrl':   null,
            'restResponsePath':   null,
            'restIdProperty':   null,
            'restLabelProperty':   null,
            'tab':   null,
            'className':   null,
            'dateDisplayFormat':   null,
            'layout':   null,
            'sizeX':   2,
            'sizeY':   1,
            'row':   -1,
            'col':   -1,
            'visibilityCondition':   null,
            'numberOfColumns':   2,
            'fields':   {
                '1':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label2',
                    'name':   'Label2',
                    'type':   'text',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   2 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   null
                }],
                '2':   [{
                    'fieldType':   'FormFieldRepresentation',
                    'id':   'label5',
                    'name':   'Label5',
                    'type':   'boolean',
                    'value':   null,
                    'required':   false,
                    'readOnly':   false,
                    'overrideId':   false,
                    'colspan':   1,
                    'placeholder':   null,
                    'minLength':   0,
                    'maxLength':   0,
                    'minValue':   null,
                    'maxValue':   null,
                    'regexPattern':   null,
                    'optionType':   null,
                    'hasEmptyValue':   null,
                    'options':   null,
                    'restUrl':   null,
                    'restResponsePath':   null,
                    'restIdProperty':   null,
                    'restLabelProperty':   null,
                    'tab':   null,
                    'className':   null,
                    'params':   { 'existingColspan':   1, 'maxColspan':   1 },
                    'dateDisplayFormat':   null,
                    'layout':   { 'row':   -1, 'column':   -1, 'colspan':   1 },
                    'sizeX':   1,
                    'sizeY':   1,
                    'row':   -1,
                    'col':   -1,
                    'visibilityCondition':   {
                        'leftFormFieldId':   'label',
                        'leftRestResponseId':   null,
                        'operator':   '==',
                        'rightValue':   'aaa',
                        'rightFormFieldId':   '',
                        'rightRestResponseId':   '',
                        'nextConditionOperator':   'and',
                        'nextCondition':   {
                            'leftFormFieldId':   'label1',
                            'leftRestResponseId':   null,
                            'operator':   '!=',
                            'rightValue':   'aaa',
                            'rightFormFieldId':   '',
                            'rightRestResponseId':   '',
                            'nextConditionOperator':   'and',
                            'nextCondition':   {
                                'leftFormFieldId':   'label2',
                                'leftRestResponseId':   null,
                                'operator':   '!empty',
                                'rightValue':   null,
                                'rightFormFieldId':   '',
                                'rightRestResponseId':   '',
                                'nextConditionOperator':   'or',
                                'nextCondition':   {
                                    'leftFormFieldId':   'label3',
                                    'leftRestResponseId':   null,
                                    'operator':   'empty',
                                    'rightValue':   null,
                                    'rightFormFieldId':   '',
                                    'rightRestResponseId':   '',
                                    'nextConditionOperator':   null,
                                    'nextCondition':   null
                                }
                            }
                        }
                    }
                }]
            }
        }],
        'outcomes':   [],
        'javascriptEvents':   [],
        'className':   '',
        'style':   '',
        'customFieldTemplates':   {},
        'metadata':   {},
        'variables':   [],
        'customFieldsValueInfo':   {},
        'gridsterForm':   false
    }
};

export let tabVisibilityJsonMock = {
    'id': 45231,
    'name': 'visibility-form',
    'description': '',
    'version': 2,
    'lastUpdatedBy': 4255,
    'lastUpdatedByFullName': 'first last',
    'lastUpdated': '2019-08-26T08: 04: 02.091+0000',
    'stencilSetId': null,
    'referenceId': null,
    'tabs': [
        {
           'id': 'tab1',
           'title': 'tab1',
           'visibilityCondition': null
        },
        {
           'id': 'tab2',
           'title': 'Tab2',
           'visibilityCondition': {
              'leftFormFieldId': 'label',
              'leftRestResponseId': null,
              'operator': '==',
              'rightValue': 'text',
              'rightType': null,
              'rightFormFieldId': '',
              'rightRestResponseId': '',
              'nextConditionOperator': '',
              'nextCondition': null
           }
        }
     ],
    'formDefinition': {
       'fields': [
          {
             'fieldType': 'ContainerRepresentation',
             'id': '1566806229182',
             'name': 'Label',
             'type': 'container',
             'value': null,
             'required': false,
             'readOnly': false,
             'overrideId': false,
             'colspan': 1,
             'placeholder': null,
             'minLength': 0,
             'maxLength': 0,
             'minValue': null,
             'maxValue': null,
             'regexPattern': null,
             'optionType': null,
             'hasEmptyValue': null,
             'options': null,
             'restUrl': null,
             'restResponsePath': null,
             'restIdProperty': null,
             'restLabelProperty': null,
             'tab': 'tab1',
             'className': null,
             'dateDisplayFormat': null,
             'layout': null,
             'sizeX': 2,
             'sizeY': 1,
             'row': -1,
             'col': -1,
             'visibilityCondition': null,
             'numberOfColumns': 2,
             'fields': {
                '1': [
                   {
                      'fieldType': 'FormFieldRepresentation',
                      'id': 'label',
                      'name': 'Label',
                      'type': 'text',
                      'value': null,
                      'required': false,
                      'readOnly': false,
                      'overrideId': false,
                      'colspan': 1,
                      'placeholder': null,
                      'minLength': 0,
                      'maxLength': 0,
                      'minValue': null,
                      'maxValue': null,
                      'regexPattern': null,
                      'optionType': null,
                      'hasEmptyValue': null,
                      'options': null,
                      'restUrl': null,
                      'restResponsePath': null,
                      'restIdProperty': null,
                      'restLabelProperty': null,
                      'tab': 'tab1',
                      'className': null,
                      'params': {
                         'existingColspan': 1,
                         'maxColspan': 2
                      },
                      'dateDisplayFormat': null,
                      'layout': {
                         'row': -1,
                         'column': -1,
                         'colspan': 1
                      },
                      'sizeX': 1,
                      'sizeY': 1,
                      'row': -1,
                      'col': -1,
                      'visibilityCondition': null
                   }
                ],
                '2': [

                ]
             }
          }
       ],
       'outcomes': [

       ],
       'javascriptEvents': [

       ],
       'className': '',
       'style': '',
       'customFieldTemplates': {

       },
       'metadata': {

       },
       'variables': [

       ],
       'customFieldsValueInfo': {

       },
       'gridsterForm': false
    }
 };

export const tabInvalidFormVisibility = {
    'id': 'form-0668939d-34b2-440c-ab4d-01ab8b05a881',
    'name': 'tab-visibility',
    'description': '',
    'version': 0,
    'standAlone': true,
    'tabs': [
        {
            'id': 'a8a4718d-5019-4852-9645-bba9b8253d86',
            'title': 'tab1',
            'visibilityCondition': {
                'leftType': 'field',
                'leftValue': 'Text1',
                'operator': '==',
                'rightValue': 'showtab',
                'rightType': 'value',
                'nextConditionOperator': '',
                'nextCondition': null
            }
        },
        {
            'id': 'bb9033ca-55ef-432a-8120-bffc8a179ebb',
            'title': 'tab2',
            'visibilityCondition': null
        }
    ],
    'formDefinition': {
        'fields': [
            {
                'id': '093270a5-6e28-4cf0-a72a-09731c0d59fd',
                'name': 'Label',
                'type': 'container',
                'tab': 'a8a4718d-5019-4852-9645-bba9b8253d86',
                'numberOfColumns': 2,
                'fields': {
                    '1': [
                        {
                            'id': 'Number1',
                            'name': 'Number1',
                            'type': 'integer',
                            'colspan': 1,
                            'placeholder': null,
                            'minValue': null,
                            'maxValue': null,
                            'required': false,
                            'visibilityCondition': null,
                            'params': {
                                'existingColspan': 1,
                                'maxColspan': 2
                            }
                        },
                        {
                            'id': 'Number2',
                            'name': 'Number2',
                            'type': 'integer',
                            'colspan': 1,
                            'placeholder': null,
                            'minValue': null,
                            'maxValue': null,
                            'required': false,
                            'visibilityCondition': {
                                'leftType': 'field',
                                'leftValue': 'Text2',
                                'operator': '==',
                                'rightValue': 'shownumber',
                                'rightType': 'value',
                                'nextConditionOperator': '',
                                'nextCondition': null
                            },
                            'params': {
                                'existingColspan': 1,
                                'maxColspan': 2
                            }
                        }
                    ],
                    '2': [
                        {
                            'id': 'Text2',
                            'name': 'Text2',
                            'type': 'text',
                            'required': false,
                            'colspan': 1,
                            'placeholder': null,
                            'minLength': 0,
                            'maxLength': 0,
                            'regexPattern': null,
                            'visibilityCondition': null,
                            'params': {
                                'existingColspan': 1,
                                'maxColspan': 2
                            }
                        }
                    ]
                }
            },
            {
                'id': 'c33579eb-3514-42cc-832d-2998d06a3eab',
                'name': 'Label',
                'type': 'container',
                'tab': 'bb9033ca-55ef-432a-8120-bffc8a179ebb',
                'numberOfColumns': 2,
                'fields': {
                    '1': [
                        {
                            'id': 'Text1',
                            'name': 'Text1',
                            'type': 'text',
                            'required': false,
                            'colspan': 1,
                            'placeholder': null,
                            'minLength': 0,
                            'maxLength': 0,
                            'regexPattern': null,
                            'visibilityCondition': null,
                            'params': {
                                'existingColspan': 1,
                                'maxColspan': 2
                            }
                        }
                    ],
                    '2': []
                }
            }
        ],
        'outcomes': [],
        'metadata': {},
        'variables': []
    }
};
