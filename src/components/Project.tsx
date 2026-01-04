import { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import type { Project } from '../types/project';

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getProjects();
            setProjects(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load projects');
            console.error('Error loading projects:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-[#080B38] flex flex-col justify-center items-center p-15 gap-15 min-h-[400px]">
                <div className="uppercase text-[32px]">my projects</div>
                <div className="text-white">Loading projects...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[#080B38] flex flex-col justify-center items-center p-15 gap-15 min-h-[400px]">
                <div className="uppercase text-[32px]">my projects</div>
                <div className="text-red-400">Error: {error}</div>
                <button 
                    onClick={loadProjects}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="bg-[#080B38] flex flex-col justify-center items-center p-15 gap-15 min-h-[400px]">
                <div className="uppercase text-[32px]">my projects</div>
                <div className="text-white">No projects found</div>
            </div>
        );
    }

    return (
        <div className="bg-[#080B38] flex flex-col justify-center items-center p-15 gap-15">
            <div className="uppercase text-[32px]">
                my projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl px-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* รูป */}
                        <img
                            src={project.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                            alt={project.projectName}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                            }}
                        />

                        {/* overlay ดำ */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* text ที่อยู่ด้านล่าง */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold">{project.projectName}</h3>
                            <p className="text-sm mt-2">{project.description || 'No description'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}