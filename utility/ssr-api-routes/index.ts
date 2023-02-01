export const ssrGetCheckOutData = async () => {
  return (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`)).json();
}