import {useState} from 'react'

function DwarfHireForm({ onHireDwarf }) {
  const [formData, setFormData] = useState({
    dwarfName: { value: '', error: '' },
    weapon: { value: '', error: '' },
    email: { value: '', error: '' },
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: { value, error: '' },
    });
  };

  const handleHireDwarf = () => {
    const isFormValid = Object.values(formData).every(
      (field) => field.value.trim() !== ''
    );

    if (isFormValid) {
      onHireDwarf(formData.dwarfName.value);
      setFormData({
        dwarfName: { value: '', error: '' },
        weapon: { value: '', error: '' },
        email: { value: '', error: '' },
      });
    } else {
      Object.keys(formData).forEach((field) => {
        if (formData[field].value.trim() === '') {
          setFormData({
            ...formData,
            [field]: { ...formData[field], error: 'Fill this field!' },
          });
        }
      });

      if (formData.weapon.value.toLowerCase() === 'bow') {
        setFormData({
          ...formData,
          weapon: { ...formData.weapon, error: 'No archers!' },
        });
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={formData.dwarfName.value}
        onChange={(e) => handleInputChange('dwarfName', e.target.value)}
      />
      <p>{formData.dwarfName.error}</p>

      <input
        type="text"
        value={formData.weapon.value}
        onChange={(e) => handleInputChange('weapon', e.target.value)}
      />
      <p>{formData.weapon.error}</p>

      <input
        type="text"
        value={formData.email.value}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      <p>{formData.email.error}</p>

      <button onClick={handleHireDwarf}>Hire Dwarf</button>
    </div>
  );
}

export default DwarfHireForm;

