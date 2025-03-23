export const Contact = () => {
  return (
    <>
      <h1 className="p-3 m-3 font-bold text-xl"> Contact-us</h1>
      <div className="flex flex-col w-3/12 m-5 gap-3">
        <input
          type="text"
          placeholder="Name"
          className="border border-black rounded p-3"
        />
        <input
          type="text"
          placeholder="Address"
          className="border border-black rounded p-3"
        />
        <button
          type="button"
          className="rounded bg-gray-100 border-1 border-black p-3 w-2/3"
        >
          Submit
        </button>
      </div>
    </>
  );
};
