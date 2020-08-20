import '@testing-library/react-hooks'
import React from 'react'
import '@testing-library/jest-dom'

import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';

describe("Pruebas en useForm", () => {

  const initialForm = {
    name: "Ezequiel",
    email: "eze.caste@gmail.com"
  };

  test('debe regresar un formulario por defecto', () => {

    const { result } = renderHook( () => useForm() );
    const [ formValue, handleChange, reset ] = result.current;

    expect( formValue ).toEqual( {} );
    expect( typeof handleChange ).toBe('function');
    expect( typeof reset ).toBe('function');
  });

  test('debe cambiar el valor del formulario', () => {
    const { result  } = renderHook( () => useForm(initialForm) );    
    const [ , handleInputChange ] = result.current;
    
    act( () => {      
      handleInputChange({
        target: {
          name: "name",
          value: "Charlie"          
        }        
      });
    })

    const [ formValue ] = result.current;
    expect( formValue ).toEqual({...initialForm, name: "Charlie"})
  });

  test('debe resetear el formulario', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange, reset ] = result.current;

    
    act( () => {      
      handleInputChange({
        target: {
          name: "name",
          value: "Marcos"
        }
      });
     
      reset();
    })

    const [formValue] = result.current;
    expect( formValue ).toEqual(initialForm)

  })
  
  


})