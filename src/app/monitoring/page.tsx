import Redis from 'ioredis';

export const revalidate = 0;

export default async function MonitoringPage() {

  // Connexion à Redis
  const redis = new Redis(process.env.REDIS_URL as string); 

  // Récupère la valeur du compteur 
  // (Redis renvoie un string donc on le convertit en int)
  const visitorsStr = await redis.get('visitor_count');
  const visitors = visitorsStr ? parseInt(visitorsStr, 10) : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#00fafe]/30 pb-4 mb-8 flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <h1 className="text-3xl font-bold text-[#00fafe] tracking-widest">SYSTEM MONITORING</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte 1 */}
          <div className="bg-[#111] border border-[#333] rounded-lg p-6 shadow-[0_0_15px_rgba(0,250,254,0.1)]">
            <h3 className="text-gray-400 text-sm mb-2">STATUS</h3>
            <p className="text-2xl text-green-400">All Systems Go</p>
          </div>
          
          {/* Carte 2 */}
          <div className="bg-[#111] border border-[#333] rounded-lg p-6 shadow-[0_0_15px_rgba(179,102,255,0.1)]">
            <h3 className="text-gray-400 text-sm mb-2">VISITORS</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-bold text-[#b366ff]">{visitors}</p>
              <p className="text-gray-500 text-sm">views</p>
            </div>
          </div>
          
          {/* Carte 3 */}
          <div className="bg-[#111] border border-[#333] rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">LAST DEPLOY</h3>
            <p className="text-2xl text-white">Today</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-black/50 border border-gray-800 rounded">
          <p className="text-gray-500 text-sm">Page Admin !</p>
        </div>
      </div>
    </div>
  );
}