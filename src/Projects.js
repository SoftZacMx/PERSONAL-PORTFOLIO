import { useEffect } from "react";

function ProjectsSection() {
    useEffect(() => {
        const section = document.querySelector(".projects-section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add("visible"); // Activate animation
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);

        return () => observer.disconnect(); // Clean up observer
    }, []);

    return (
        <div className="projects-section">
            <h2>Some of My Most Important Projects</h2>
            <div className="projects-container">

                <div className="card">
                    <h3>SIDGDER</h3>
                    <p>Comprehensive management system for restaurants.</p>
                    <a href="https://sdigder-frontend-example.onrender.com" target="_blank" rel="noopener noreferrer">
                        <button>See More</button>
                    </a>
                    <section className="credentials">
                        <h4>Credentials</h4>
                        <p><strong>User:</strong> example@gmail.com</p>
                        <p><strong>Password:</strong> admin</p>
                    </section>
                </div>
                <div className="card">
                    <h3>SIDGDEP</h3>
                    <p>Comprehensive system for gym management.</p>
                    <a href="https://academies-demo-frontned.onrender.com" target="_blank" rel="noopener noreferrer">
                        <button>See More</button>
                    </a>
                    <section className="credentials">
                        <h4>Credentials</h4>
                        <p><strong>User:</strong> admin@gmail.com</p>
                        <p><strong>Password:</strong> adminadmin</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;