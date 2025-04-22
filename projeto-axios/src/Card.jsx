export function Card() {
  return (
    <div className="flex rounded-md border max-w-96 gap-2 flex-col p-2 ">
      <div>
        <span className="font-bold">16.04.2025</span>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Tailwind é sensacional!</h2>
        <p className="text-gray-600">
          Depois que eu usei Tailwind minha vida melhorou, Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Officiis praesentium magnam
          aperiam quo consectetur architecto deleniti aliquam doloribus dicta
          modi laborum dolor, dignissimos fugiat quam pariatur asperiores, nisi
          recusandae eveniet.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img
            className="bg-blue-600 w-10 h-10 rounded-full"
            src="https://tiermaker.com/images/chart/chart/naruto-classico--sem-figurantes--filosofisica--395963/capajpg.png"
            alt="Imagem de perfil João Pedro"
          />
        </div>
        <div className="tracking-wide">
          <h3 className="font-semibold">João Pedro</h3>
          <span className="text-sm">Engenheiro de Software</span>
        </div>
      </div>
    </div>
  );
}
