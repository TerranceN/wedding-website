export const intersperse = <Elem, Arr extends Array<Elem>, InterElem>(
  array: Arr,
  interspersedElement: InterElem,
): Array<Elem | InterElem> =>
  array.flatMap((item, index) =>
    index ? [interspersedElement, item] : [item],
  );
