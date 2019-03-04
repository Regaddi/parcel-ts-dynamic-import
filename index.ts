const main = async function() {
  if (process.env.NODE_ENV !== "production") {
    const { mockMe } = await import("./mock");
    mockMe();
  }
  console.log("ENV:", process.env.NODE_ENV);
};

main();
