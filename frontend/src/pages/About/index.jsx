import React from "react";

/**
 * Palette (seguindo o site):
 *  - Navy    = #0F2532  (bg principal / header)
 *  - Navy-2  = #102B3A  (blocos/contraste)
 *  - Stone   = #E9EEF2  (texto secundário claro)
 *  - Sand    = #F5F6F7  (cards muito claros quando necessário)
 *  - Gold    = #D7A86E  (acento/botões/ícones)
 */

const badges = ["Experiências memoráveis", "Segurança e confiança", "Plataforma moderna"];

const values = [
  { title: "Propósito", text: "Criar histórias para lembrar e contar. Cada cliente vive algo marcante, não apenas um serviço." },
  { title: "Inovação", text: "Uma plataforma prática, inteligente e sem complicação para acessar lazer com poucos cliques." },
  { title: "Segurança & Confiança", text: "Operações planejadas com responsabilidade, para você aproveitar cada instante com tranquilidade." },
  { title: "Acessibilidade", text: "Democratizamos o extraordinário, quebrando barreiras financeiras, logísticas e burocráticas." },
];

const diffs = [
  { title: "Ecossistema de experiências", text: "Não alugamos apenas veículos: conectamos pessoas a momentos que viram memórias." },
  { title: "Curadoria de rotas e destinos", text: "Sugestões de locais e trilhas para você aproveitar cada minuto com liberdade e segurança." },
  { title: "Fricção mínima", text: "Processos claros, suporte ágil e jornada fluida do início ao fim." },
];

const fleet = ["Jet skis", "Quadriciclos", "Lanchas"];

export default function AboutMove() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="min-h-screen bg-[#0F2532] text-white selection:bg-[#D7A86E]/30">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* glow suave no topo como no hero do site */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(215,168,110,0.12),_transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-[#E9EEF2]/90">
            M.O.V.E • SOBRE NÓS
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-[#D7A86E]">Aventura</span> com conforto, segurança e agilidade
          </h1>
          <p className="mt-4 max-w-2xl text-[#E9EEF2]/90">
            A MOVE conecta pessoas a meios de lazer — jet skis, quadriciclos e lanchas — para transformar finais de semana em
            memórias inesquecíveis, com jornada digital simples e suporte de ponta a ponta.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm text-[#E9EEF2] ring-1 ring-white/10 transition hover:ring-[#D7A86E]/40"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS (card grande claro como os blocos do site) */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl bg-[#102B3A]/70 ring-1 ring-white/10 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-wide uppercase text-[#D7A86E]">Quem Somos</h2>
          <p className="mt-3 max-w-3xl text-[#E9EEF2]/90">
            Nascemos para mover pessoas para além do comum. Mais do que facilitar o acesso a veículos de lazer, provocamos
            sentimentos, aproximamos pessoas e inspiramos novas histórias. Somos um ecossistema de experiências.
          </p>
        </div>
      </section>

      {/* PROPÓSITO / MISSÃO / VISÃO */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Propósito",
              d: "Mover pessoas para além do comum — democratizando o extraordinário e transformando lazer em memórias.",
            },
            {
              t: "Missão",
              d: "Conectar, com praticidade e segurança, pessoas a experiências antes distantes por custo ou burocracia.",
            },
            {
              t: "Visão",
              d: "Ser a referência em experiências de lazer acessíveis na América Latina, com inovação e confiança.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 transition hover:translate-y-[-2px] hover:ring-[#D7A86E]/40"
            >
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-[#E9EEF2]/90">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALORES */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h2 className="text-2xl font-bold tracking-wide uppercase text-[#D7A86E]">Nossos Valores</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 transition hover:shadow-lg hover:shadow-black/10"
            >
              <p className="text-sm font-medium text-white/95">{title}</p>
              <p className="mt-2 text-sm text-[#E9EEF2]/90">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE FAZEMOS + DIFERENCIAIS */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-2xl font-bold tracking-wide uppercase text-[#D7A86E]">O que fazemos</h2>
            <p className="mt-3 text-[#E9EEF2]/90">
              Cuidamos de segurança, praticidade e conveniência para que você só precise aproveitar. Acesso simples a uma
              frota selecionada e parceiros verificados — com processos claros e suporte ágil.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {fleet.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full bg-[#D7A86E]/15 px-3 py-1 text-sm text-[#E9EEF2] ring-1 ring-[#D7A86E]/30"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#102B3A]/70 ring-1 ring-white/10 p-6">
            <h3 className="text-lg font-semibold">Como fazemos a diferença</h3>
            <ul className="mt-3 space-y-4 text-[#E9EEF2]/90">
              {diffs.map(({ title, text }) => (
                <li key={title} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 flex-none rounded-full bg-[#D7A86E]" />
                  <div>
                    <p className="text-sm font-medium text-white/95">{title}</p>
                    <p className="text-sm">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <h2 className="text-2xl font-bold tracking-wide uppercase text-[#D7A86E]">
            Como impactamos nossos clientes
          </h2>
          <p className="mt-3 max-w-3xl text-[#E9EEF2]/90">
            Tornamos o inacessível acessível. Ao reduzir custos e burocracias, aproximamos pessoas de experiências que antes
            pareciam distantes — em família, com amigos ou em aventuras solo.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Frota Premium", "Reserva 100% Digital", "Suporte 24/7"].map((t) => (
              <span key={t} className="rounded-full bg-[#D7A86E]/15 px-3 py-1 text-sm ring-1 ring-[#D7A86E]/30">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#102B3A] to-[#0F2532] ring-1 ring-white/10 p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold tracking-tight">Pronto para viver algo extraordinário?</h3>
          <p className="mt-2 max-w-2xl text-[#E9EEF2]/90">
            Cadastre-se para receber novidades e ser um dos primeiros a acessar as experiências da MOVE.
          </p>

          <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:ring-2 focus:ring-[#D7A86E]/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-[#D7A86E] px-5 py-3 font-semibold text-[#0F2532] shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:brightness-105 active:translate-y-0"
            >
              Quero ser avisado(a)
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER (barra semelhante ao app) */}
      <footer className="border-t border-white/10 bg-[#0F2532]">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#E9EEF2]/80">
          © {new Date().getFullYear()} M.O.V.E — Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}