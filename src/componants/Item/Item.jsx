function Item({ title, content, color }) {
  return (
    <div className="relative flex-1 flex">
      <img src="./src/assets/Item2.svg" alt="" className="h-full w-auto" />
      <div className="absolute left-0 w-4/6 h-full">
        <p className="relative left-2 top-0 ${class}">{title}</p>
        <p className="relative left-2 top-0">{content}</p>
      </div>
      <div className="absolute right-0 h-full w-2/6">
        <p className="">Text</p>
      </div>
    </div>
  );
}

export default Item;
