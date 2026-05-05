import heroImg from "@/assets/hero-dev.jpg";
import {
  Code2, Server, Shield, Sparkles, Cpu, Database, GitBranch, Award,
  TrendingUp, Building2, Rocket, Globe, ChevronRight, ExternalLink,
  Briefcase, GraduationCap, Target, Zap, Users, Github, Linkedin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "sobre", label: "O que faz" },
  { id: "tech", label: "Tecnologias" },
  { id: "certs", label: "Certificações" },
  { id: "salario", label: "Salários" },
  { id: "empresas", label: "Empresas" },
  { id: "desafios", label: "Desafios" },
  { id: "ods", label: "ODS 9" },
  { id: "quem-somos", label: "Quem somos" },
  { id: "fontes", label: "Fontes" },
];

const equipe = [
  {
    nome: "Abrahão David",
    github: "https://github.com/abrahaodavid7",
    linkedin: "https://www.linkedin.com/in/abrahao-david-8a7122408/",
  },
  {
    nome: "Gabriel Rezende",
    github: "https://github.com/GabrielRezende-Dev",
    linkedin: "https://www.linkedin.com/in/gabriel-rezende-2384093b4",
  },
  {
    nome: "Leandro Machado",
    github: "https://github.com/Machado-Leandro11",
    linkedin: "https://www.linkedin.com/in/leandro-machado-75b0682a5",
  },
  {
    nome: "Rafael Santos",
    github: "https://github.com/RafaelSouza-hub",
    linkedin: "https://www.linkedin.com/in/rafael-de-s-santos-10a92717a/",
  },
];

const responsabilidades = [
  { icon: Code2, title: "Front-end", desc: "Criar a interface visual e a experiência do usuário (UX/UI)." },
  { icon: Server, title: "Back-end", desc: "Gerenciar a lógica do servidor, bancos de dados e integrações (APIs)." },
  { icon: Shield, title: "Manutenção", desc: "Garantir que o site seja responsivo (celulares e PCs) e seguro contra ataques." },
  { icon: Sparkles, title: "IA-Augmentation", desc: "Utilizar ferramentas de IA para acelerar o desenvolvimento e validar a eficiência do código." },
];

const techGroups = [
  { icon: Code2, title: "Linguagens Base", items: ["HTML5", "CSS3", "JavaScript"], note: "Essencial para 98% dos sites." },
  { icon: Cpu, title: "Frameworks Modernos", items: ["React.js", "Vue.js", "Node.js", "PHP / Laravel"], note: "Front-end e Back-end." },
  { icon: Database, title: "Bancos de Dados", items: ["PostgreSQL", "MongoDB", "MySQL"], note: "Persistência de dados." },
  { icon: GitBranch, title: "Ferramentas de Suporte", items: ["Git", "Docker", "Prompt Engineering"], note: "Controle, virtualização e IA." },
];

const certs = [
  "Google Career Certificates — habilidades práticas e empregabilidade rápida (Suporte em TI, Análise de Dados).",
  "Microsoft Azure Developer Associate (AZ-204) — ecossistema de nuvem da Microsoft, comum em grandes corporações.",
  "AWS Certified Developer — para aplicações em nuvem.",
  "Oracle Certified Professional (Java) — fundamental para sistemas corporativos robustos.",
  "Metodologias Ágeis (Scrum / Kanban) — essenciais para o trabalho em equipe.",
  "Cibersegurança (CISSP ou similar) — devido à LGPD e proteção de dados.",
  "Cursos técnicos ou superiores em TI — ADS, Ciência da Computação, Engenharia de Software.",
  "Portfólio com projetos reais desenvolvidos.",
];

const salarios = [
  { nivel: "Júnior", faixa: "R$ 3.000 – R$ 5.500", desc: "Início de carreira, foco em fundamentos e mentoria." },
  { nivel: "Pleno", faixa: "R$ 6.000 – R$ 10.000", desc: "Autonomia técnica, entrega de features completas." },
  { nivel: "Sênior", faixa: "R$ 11.000 – R$ 18.000", desc: "Decisões de arquitetura, mentoria e liderança técnica." },
  { nivel: "Especialista / Tech Lead", faixa: "R$ 18.000 – R$ 30.000+", desc: "Liderança, arquitetura de sistemas e estratégia." },
];

const empresas = [
  { setor: "Software Houses", nomes: ["Stefanini", "DEVIO", "LinkAPI"] },
  { setor: "Setor Financeiro", nomes: ["Nubank", "Itaú", "Inter"] },
  { setor: "E-commerce", nomes: ["Mercado Livre", "Magalu", "Amazon"] },
  { setor: "Techs & Startups", nomes: ["Agtechs", "Healthtechs"] },
  { setor: "Big Techs", nomes: ["Google", "Meta"] },
];

const fontes = [
  { name: "HostMídia (2026)", url: "https://www.hostmidia.com.br/blog/desenvolvedor-web/" },
  { name: "Hostinger (2026)", url: "https://www.hostinger.com/br/tutoriais/linguagens-de-programacao-mais-usadas" },
  { name: "DataCamp / Nextage", url: "https://nextage.com.br/blog/conheca-as-areas-de-ti-que-estarao-em-alta-em-2026/" },
  { name: "Unclik (2026)", url: "https://unclik.com.br/conteudos/quanto-ganha-um-desenvolvedor-web-no-brasil/" },
  { name: "Blog Devio", url: "https://blog.devio.com.br/melhores-software-houses-brasil-2026-ranking/" },
  { name: "Jornal Dev (2026)", url: "https://jornal.dev.br/mercado-de-trabalho-para-dev-em-2026/" },
  { name: "Ipea / Agenda 2030", url: "https://www.ipea.gov.br/ods/ods9.html" },
  { name: "Revista Exame / Carreiras", url: "https://exame.com/carreira/as-10-competencias-mais-valorizadas-nos-profissionais-de-ti/" },
  { name: "Educa Mais Brasil", url: "https://www.educamaisbrasil.com.br/cursos-e-faculdades/desenvolvimento-web/salario-desenvolvedor-web-carreira" },
];

const SectionTitle = ({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) => (
  <div className="max-w-3xl mb-12">
    <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/5 font-mono text-xs tracking-wider">
      {eyebrow}
    </Badge>
    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
    {desc && <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <nav className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center glow">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="text-gradient">DevWeb</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {sections.slice(0, 6).map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                {s.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="bg-hero-gradient hover:opacity-90 text-primary-foreground border-0">
            <a href="#fontes">Fontes <ExternalLink className="w-3 h-3 ml-1" /></a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Estação de trabalho futurista de desenvolvedor web" width={1920} height={1088} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container relative">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 font-mono">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              Carreira em alta · Brasil 2026
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
              Desenvolvedor <span className="text-gradient">Web</span>
              <br /> constrói o futuro digital.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Quem cria, mantém e evolui as aplicações que fazem a internet funcionar.
              Conheça a profissão, as tecnologias, os salários e o impacto social
              do desenvolvimento web no Brasil.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-hero-gradient text-primary-foreground border-0 hover:opacity-90 glow">
                <a href="#sobre">Conhecer a profissão <ChevronRight className="w-4 h-4 ml-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/50">
                <a href="#salario">Ver salários</a>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { v: "98%", l: "dos sites usam JavaScript" },
                { v: "95%", l: "trabalha remoto" },
                { v: "+30k", l: "vagas abertas no Brasil" },
                { v: "ODS 9", l: "Indústria & Inovação" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary/40 pl-4">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE FAZ */}
      <section id="sobre" className="py-24 container">
        <SectionTitle
          eyebrow="01 · A profissão"
          title="O que faz um Desenvolvedor Web?"
          desc="Projeta, constrói e mantém sites e aplicações que funcionam via navegador, conectando interfaces, servidores e dados."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {responsabilidades.map((r) => (
            <Card key={r.title} className="card-glass p-6 border-0">
              <div className="w-12 h-12 rounded-xl bg-hero-gradient/10 border border-primary/20 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section id="tech" className="py-24 container">
        <SectionTitle
          eyebrow="02 · Stack"
          title="Tecnologias, Linguagens e Ferramentas"
          desc="As ferramentas indispensáveis para o mercado atual de desenvolvimento web."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {techGroups.map((g) => (
            <Card key={g.title} className="card-glass p-7 border-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <g.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {g.items.map((it) => (
                  <span key={it} className="font-mono text-xs px-3 py-1.5 rounded-md bg-muted border border-border text-foreground/90">
                    {it}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{g.note}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section id="certs" className="py-24 container">
        <SectionTitle
          eyebrow="03 · Qualificação"
          title="Certificações e Qualificações"
          desc="Embora o portfólio seja crucial, estas são as certificações mais valorizadas no mercado."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <Card key={i} className="card-glass p-5 border-0 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-hero-gradient flex items-center justify-center font-mono text-sm font-bold text-primary-foreground shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm md:text-base leading-relaxed pt-1">{c}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
          <GraduationCap className="w-5 h-5 text-primary" />
          <span>Cursos técnicos e/ou superiores em TI: ADS, Ciência da Computação, Engenharia de Software etc.</span>
        </div>
      </section>

      {/* SALÁRIO */}
      <section id="salario" className="py-24 container">
        <SectionTitle
          eyebrow="04 · Mercado"
          title="Média Salarial e Perspectivas — Brasil 2026"
          desc="O mercado continua aquecido, com déficit de profissionais qualificados. Os valores variam conforme o porte da empresa e a senioridade."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {salarios.map((s, i) => (
            <Card key={s.nivel} className="card-glass p-6 border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 font-display font-bold text-7xl text-primary/5 leading-none p-2">
                {i + 1}
              </div>
              <Briefcase className="w-6 h-6 text-primary mb-4" />
              <div className="font-mono text-xs text-muted-foreground mb-1">{s.nivel}</div>
              <div className="font-display text-xl md:text-2xl font-bold text-gradient mb-3">{s.faixa}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
        <Card className="card-glass p-6 border-0 flex items-start gap-4">
          <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold mb-1">Perspectiva</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expansão contínua devido à digitalização do varejo, agronegócio e saúde no Brasil.
            </p>
          </div>
        </Card>
      </section>

      {/* EMPRESAS */}
      <section id="empresas" className="py-24 container">
        <SectionTitle
          eyebrow="05 · Empregadores"
          title="Principais Empresas Contratantes"
          desc="Os setores e companhias que mais buscam desenvolvedores web no Brasil."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {empresas.map((e) => (
            <Card key={e.setor} className="card-glass p-6 border-0">
              <Building2 className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-3">{e.setor}</h3>
              <div className="flex flex-wrap gap-2">
                {e.nomes.map((n) => (
                  <span key={n} className="text-sm px-3 py-1 rounded-full bg-secondary/15 text-foreground border border-secondary/30">
                    {n}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* DESAFIOS */}
      <section id="desafios" className="py-24 container">
        <SectionTitle
          eyebrow="06 · Realidade"
          title="Desafios e Oportunidades"
        />
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="card-glass p-8 border-0">
            <Target className="w-8 h-8 text-destructive mb-4" />
            <h3 className="font-display font-semibold text-2xl mb-4">Desafios</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-destructive mt-1">▸</span> Aumento da régua técnica — não basta saber o básico.</li>
              <li className="flex gap-3"><span className="text-destructive mt-1">▸</span> Necessidade de entender de negócios.</li>
              <li className="flex gap-3"><span className="text-destructive mt-1">▸</span> Constante atualização frente à IA generativa.</li>
            </ul>
          </Card>
          <Card className="card-glass p-8 border-0">
            <Rocket className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-2xl mb-4">Oportunidades</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary mt-1">▸</span> Trabalho remoto — 95% da categoria possui infraestrutura.</li>
              <li className="flex gap-3"><span className="text-primary mt-1">▸</span> Migração para cargos de liderança técnica.</li>
              <li className="flex gap-3"><span className="text-primary mt-1">▸</span> Arquitetura de sistemas e especialização.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* ODS */}
      <section id="ods" className="py-24 container">
        <SectionTitle
          eyebrow="07 · Impacto"
          title="Conexão com o ODS 9"
          desc="Indústria, Inovação e Infraestrutura. O desenvolvimento web é o motor da Meta 9.c da ONU, que visa aumentar o acesso às tecnologias de informação e promover a internet universal."
        />
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="card-glass p-8 border-0 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-hero-gradient opacity-10 blur-2xl" />
            <Globe className="w-9 h-9 text-primary mb-4" />
            <h3 className="font-display font-semibold text-xl mb-3">Infraestrutura Digital para Pequenas Indústrias</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedores criam plataformas de gestão (ERP) acessíveis via web que permitem
              que pequenas fábricas automatizem processos, aumentando a produtividade e inovação
              sem custos de hardware local.
            </p>
          </Card>
          <Card className="card-glass p-8 border-0 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-hero-gradient opacity-10 blur-2xl" />
            <Zap className="w-9 h-9 text-primary mb-4" />
            <h3 className="font-display font-semibold text-xl mb-3">Inovação no Acesso à Informação</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aplicações web leves e progressivas (PWAs) permitem que populações em áreas com
              infraestrutura precária acessem serviços de saúde e educação, democratizando a
              inovação tecnológica.
            </p>
          </Card>
        </div>
        <div className="mt-8">
          <Badge className="bg-hero-gradient text-primary-foreground border-0 px-4 py-2 text-sm">
            <Award className="w-4 h-4 mr-2" /> ODS 9 · Meta 9.c · Agenda 2030 ONU
          </Badge>
        </div>
      </section>

      {/* FONTES */}
      <section id="fontes" className="py-24 container">
        <SectionTitle eyebrow="08 · Referências" title="Fontes Consultadas" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {fontes.map((f) => (
            <a
              key={f.url}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-4 border-0 rounded-xl flex items-center justify-between group"
            >
              <span className="text-sm font-medium pr-2">{f.name}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 mt-12">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-hero-gradient flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            <span className="font-display font-semibold text-foreground">DevWeb · 2026</span>
          </div>
          <p>Conteúdo educacional sobre a profissão de Desenvolvedor Web no Brasil.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
