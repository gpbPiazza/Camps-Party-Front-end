
import VMasker from "vanilla-masker";

// eslint-disable-next-line consistent-return
function masks(text, type) {
  switch (type) {
    case "cep":
      return VMasker.toPattern(text, "99999-999");
    case "cpf":
      return VMasker.toPattern(text, "999.999.999-99");
    case "date":
      return VMasker.toPattern(text, "99/99/9999");
    case "tel": {
      const telMask = ["(99) 9999-9999", "(99) 99999-9999"];
      const numbers = text.replace(/\D/g, "");
      return VMasker.toPattern(
        numbers,
        numbers.length > 10 ? telMask[1] : telMask[0]
      );
    }
    default:
  }
}

export default masks;
