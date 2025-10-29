interface FormFields extends HTMLFormControlsCollection {
  category: HTMLSelectElement;
  name: HTMLInputElement;
  path: HTMLInputElement;
  icon: HTMLInputElement;
}

const getDocumentsFromFormFieldsGenerator = () => (elements: FormFields) => ({
  // category: elements.category.value,
  category: "685513670cffa31fddf42662",
  name: elements.name.value,
  path: elements.path.value,
  icon: elements.icon.value,
  createdBy: "",
  updatedBy: ""
});

export default getDocumentsFromFormFieldsGenerator;
