export default function OutlerSection() {
  return (
    <div className="mt-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-10 md:p-14 border-8 border-gray-600">
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-8">
        Albert C. Outler (1908–1989)
      </h2>
      <p className="text-xl md:text-2xl text-center italic text-gray-700 mb-8">
        The scholar who coined “Wesleyan Quadrilateral” — then regretted it
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-lg md:text-xl">
        <div className="text-center">
          <p className="font-bold text-gray-900 mb-2">1964</p>
          <p className="text-gray-700">First used the term in his introduction to <em>John Wesley</em> (Oxford)</p>
        </div>
        <div className="text-center border-x-4 border-gray-500">
          <p className="font-bold text-gray-900 mb-2">Outler’s Regret (1985)</p>
          <blockquote className="italic text-gray-800">
            “I have come to regret that I ever used the word ‘quadrilateral’… It has created the false impression that all four are equal sources.”
          </blockquote>
        </div>
        <div className="text-center">
          <p className="font-bold text-gray-900 mb-2">Truth</p>
          <p className="text-gray-700"><strong>Scripture alone remains primary and supreme</strong></p>
        </div>
      </div>
    </div>
  );
}