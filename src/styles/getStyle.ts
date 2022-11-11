export const getStyle = (id: string | undefined) => {
  if (Number(id) % 2 === 0) {
    return { background: "#F4EEFD" };
  } else if (Number(id) % 3 === 0) {
    return { background: "#FEE9E2" };
  } else {
    return { background: "#D7E4FD" };
  }
};
