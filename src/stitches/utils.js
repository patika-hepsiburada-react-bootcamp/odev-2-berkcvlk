export const utils = {
  /**
   * @params {string} value Flex alignment parameter
   * @example "center flex-end" center for 'align-items', flex-end for 'justify-content'
   */
  dFlex: (value) => {
    const val = value.split(" ");

    return {
      display: "flex",
      alignItems: val[0] || "initial",
      justifyContent: val[1] || "initial",
    };
  },
  marginX: (value) => ({ marginLeft: value, marginRight: value }),
  marginY: (value) => ({ marginTop: value, marginBottom: value }),
  paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
  paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
};
