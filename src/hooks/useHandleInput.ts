import { useState, type ChangeEvent } from "react";

const useHandlerInput = <Type>( initialValue: Type ): [ Type, (e: ChangeEvent<HTMLInputElement>) => void ] => {
  const [formData, setFormData] = useState<Type>(initialValue);

  const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return [ formData, handleInputChange ];
}

export default useHandlerInput;