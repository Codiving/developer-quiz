export const hexToRgbWithA = (hex: string, a: number) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(Number(c) >> 16) & 255, (Number(c) >> 8) & 255, Number(c) & 255].join(
        ","
      ) +
      `,${a})`
    );
  }
  throw new Error("Bad Hex");
};

export const getRandom = (max: number, min: number = 0, count: number = 1) => {
  const result: number[] = [];

  for (let i = 0; i < count; ) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!result.includes(random)) {
      i++;
      result.push(random);
    }
  }

  return result;
};

export const shuffle = () => Math.random() - 0.5;
