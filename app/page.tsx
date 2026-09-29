import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

// Definimos la información del equipo en un arreglo para facilitar su renderizado
const teamMembers = [
  {
    id: 1,
    name: "Gerardo López Lagunes",
    avatar: "Foto_Gerardo_APP.webp", // Avatar autogenerado
    interests: "Backend, Ciberseguridad, Hacking ético, Forense digital, Cloud computing, Sistemas embebidos, IoT.",
    links: [
      { platform: "GitHub", url: "https://github.com/ganglyglub2-gif", icon: <FaGithub size={24} />, color: "bg-gray-800" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin size={24} />, color: "bg-blue-600" }
    ]
  },
  {
    id: 2,
    name: "César Daniel Jaimes Calderón",
    avatar: "Foto_Daniel_APP.jpeg", 
    interests: "Ciberseguridad, videojuegos, desarrollo móvil, sistemas embebidos, simulación, computación nube, redes.",
    links: [
      { platform: "GitHub", url: "https://github.com/DANIX3gamer", icon: <FaGithub size={24} />, color: "bg-gray-800" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/c%C3%A9sar-daniel-jaimes-calder%C3%B3n-7a656a282/", icon: <FaLinkedin size={24} />, color: "bg-blue-600" }
    ]
  },
  {
    id: 3,
    name: "Leonardo Pedroza Díaz",
    avatar: "Foto_Leonardo_APP.jpeg",
    interests: "Ciberseguridad, hacking ético, cloud computing, desarrollo de software, desarrollo web, redes, sistemas operativos, Big Data, inteligencia artificial, bases de datos, desarrollo móvil, videojuegos, IoT, hardware y automatización.",
    links: [
      { platform: "GitHub", url: "https://github.com/leonardo2243", icon: <FaGithub size={24} />, color: "bg-gray-800" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/leonardo-pedroza-90376536b?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: <FaLinkedin size={24} />, color: "bg-blue-600" }
    ]
  }
];

export default function ProfilesPage() {
  return (
    // Contenedor principal con fondo gris y responsivo
    <main className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center font-sans">
<h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Equipo Dos y un colado
      </h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Perfiles del Equipo
      </h1>

      {/* Contenedor de las tarjetas */}
      <div className="w-full max-w-md space-y-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            
            {/* Foto / Avatar */}
            <img 
              src={member.avatar} 
              alt={`Avatar de ${member.name}`} 
              className="w-24 h-24 rounded-full bg-gray-200 border-4 border-gray-50 mb-4"
            />
            
            {/* Información */}
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-600 mt-2 mb-4 px-2">
              <span className="font-medium">Intereses:</span> {member.interests}
            </p>

            {/* Arreglo de botones con íconos */}
            <div className="flex flex-row gap-4 mt-auto">
              {member.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-3 rounded-full text-white transition-transform hover:scale-105 ${link.color}`}
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </main>
  );
}