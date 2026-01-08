import {Briefcase, Code, User} from 'lucide-react'

export function AboutSection(){
    return (
        <section id="about" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">

                <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground">
                            With over 1 year of hands-on experience in web development, I specialize in building modern, responsive, and user-focused web applications using React.js and Next.js.
                        </p>
                         <p className="text-muted-foreground">
                           I hold a Master’s degree in Computer Science and have qualified the UGC NET examination. I enjoy working on real-world problems, collaborating with teams, and continuously learning new technologies to improve performance, scalability, and user experience.Alongside professional work, I have contributed to social initiatives through my NGO, Go Clean Go Green, and have experience mentoring and teaching students.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                             <a href="https://drive.google.com/file/d/1af9zJF-t11ZpeKTRfm4AjnMJCLxqCQgm/view?usp=sharing" target='_blank' className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-prmary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p>Building responsive and scalable web applications using React.js, Next.js, JavaScript, and modern UI practices.</p>
                                </div>
                            </div>
                        </div>
                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>UI/UX design</h4>
                                    <p>Creating clean, intuitive, and accessible user interfaces with a focus on usability and performance.</p>
                                </div>
                            </div>
                         </div>
                          <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Project & Collaboration</h4>
                                    <p>Experience working in team environments, handling real-world projects, meeting deadlines, and maintaining clean, efficient codebases.</p>
                                </div>
                            </div>
                          </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}