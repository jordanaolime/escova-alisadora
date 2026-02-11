import { useEffect, useState } from "react";
import { Check, Star, Truck, ShieldCheck, ArrowRight, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import imgHero from "@/assets/images/hero-main.jpg";
import imgFeatures from "@/assets/images/product-features.jpg";
import imgProduct from "@/assets/images/product-detail.jpg";
import imgBeforeAfter1 from "@/assets/images/before-after-1.jpg";
import imgBeforeAfter2 from "@/assets/images/before-after-2.jpg";
import imgBeforeAfter3 from "@/assets/images/before-after-3.jpg";

const CHECKOUT_LINK = "https://app.coinzz.com.br/checkout/escova-alisadora-8apwj-0";
const PRICE_OLD = "R$ 149,90";
const PRICE_NEW = "R$ 89,90";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Aquecimento Rápido",
    description: "Pronta para usar em segundos, economizando seu tempo pela manhã."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Proteção Térmica",
    description: "Tecnologia que protege os fios do calor excessivo, evitando danos."
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "5 Níveis de Temperatura",
    description: "Ideal para todos os tipos de cabelo, do liso ao crespo."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Alisa em Minutos",
    description: "Passe como uma escova comum e veja a mágica acontecer."
  }
];

const faqItems = [
  {
    question: "A escova serve para todos os tipos de cabelo?",
    answer: "Sim! Com 5 níveis de temperatura ajustáveis (140°C a 200°C), ela é perfeita para cabelos finos, ondulados, cacheados e crespos."
  },
  {
    question: "Posso usar no cabelo molhado?",
    answer: "Recomendamos o uso no cabelo seco ou levemente úmido para melhores resultados e proteção dos fios."
  },
  {
    question: "Qual a voltagem?",
    answer: "A escova é Bivolt, podendo ser utilizada tanto em 110v quanto em 220v sem preocupações."
  },
  {
    question: "Como funciona o pagamento na entrega?",
    answer: "É super seguro! Você faz o pedido agora no site e só paga o valor quando o produto chegar na sua casa. Sem riscos."
  }
];

export default function Home() {
  const [showMobileBanner, setShowMobileBanner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after 20% scroll, hide near footer
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setShowMobileBanner(scrollPercent > 20 && scrollPercent < 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBuyClick = () => {
    window.open(CHECKOUT_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Mobile Pay Banner */}
      <AnimatePresence>
        {showMobileBanner && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="mobile-pay-banner md:hidden"
          >
            PAGUE NA ENTREGA ✅
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground leading-tight">
              Escova<span className="text-primary">Alisadora</span>
            </div>
            <div className="pay-ribbon hidden md:inline-flex mt-0.5 scale-90 origin-left">
              <Check className="w-3 h-3" /> Você só paga quando receber em casa
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <Button 
              onClick={handleBuyClick} 
              className="hidden md:flex bg-cta-green hover:bg-green-700 text-white font-bold shimmer-effect cta-lift shadow-lg hover:shadow-green-500/25 transition-all"
            >
              PEDIR AGORA - PAGAR NA ENTREGA
            </Button>
            <Button 
              onClick={handleBuyClick} 
              size="sm"
              className="md:hidden bg-cta-green hover:bg-green-700 text-white font-bold shadow-md shimmer-effect"
            >
              COMPRAR
            </Button>
            <span className="text-[10px] text-gray-500 font-medium hidden md:block">Sem pagamento adiantado.</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 text-center md:text-left z-10"
            >
              <div className="mb-6 inline-block">
                <div className="pay-badge shimmer-effect">
                  <Truck className="w-3.5 h-3.5" /> PAGUE SOMENTE NA ENTREGA
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight text-gray-900 mb-6">
                Cabelos de Salão no <span className="text-primary">Conforto de Casa</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A tecnologia que alisa, seca e dá brilho em uma única passada. Sem danos, sem frizz e com resultado profissional em minutos.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <Button 
                    onClick={handleBuyClick} 
                    size="lg" 
                    className="w-full text-lg px-8 py-6 bg-cta-green hover:bg-green-700 text-white shadow-xl hover:shadow-green-500/30 font-bold transition-all transform cta-lift shimmer-effect"
                  >
                    QUERO COMPRAR AGORA
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <span className="text-xs text-center text-gray-500 font-bold">Sem pagamento adiantado.</span>
                </div>
                <div className="flex flex-col text-sm text-gray-500 text-center sm:text-left">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-600" /> Garantia de 30 dias</span>
                  <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-green-600" /> Frete Grátis hoje</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="font-medium text-gray-700">Mais de 2.000 clientes felizes</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-90 -z-10"></div>
              <img 
                src={imgHero} 
                alt="Escova Alisadora Resultado" 
                className="w-full rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Oferta Especial</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-400 line-through text-sm">{PRICE_OLD}</span>
                  <span className="text-3xl font-bold text-green-600">{PRICE_NEW}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Resultados Reais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja a transformação que a Escova Alisadora pode fazer no seu cabelo em poucos minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[imgBeforeAfter1, imgBeforeAfter2, imgBeforeAfter3].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative rounded-xl overflow-hidden shadow-lg"
              >
                <img src={img} alt={`Resultado ${idx + 1}`} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <span className="text-white font-bold text-lg">Antes & Depois</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="md:w-1/2 order-2 md:order-1">
               <img src={imgFeatures} alt="Tecnologia da Escova" className="w-full rounded-2xl shadow-xl" />
             </div>
             <div className="md:w-1/2 order-1 md:order-2">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                 Tecnologia Profissional <br/><span className="text-primary">Na Palma da Sua Mão</span>
               </h2>
               <div className="space-y-6">
                 {features.map((feature, idx) => (
                   <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                     <CardContent className="p-4 flex items-start gap-4">
                       <div className="p-2 rounded-full bg-primary/10 mt-1">
                         {feature.icon}
                       </div>
                       <div>
                         <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
                         <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                       </div>
                     </CardContent>
                   </Card>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">Design Ergonômico e Seguro</h2>
          <div className="relative max-w-4xl mx-auto">
             <img src={imgProduct} alt="Detalhes do Produto" className="mx-auto rounded-2xl shadow-2xl relative z-10" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full -z-10 opacity-50"></div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-2">
            <Button onClick={handleBuyClick} size="lg" className="bg-cta-green hover:bg-green-700 text-white font-bold px-12 py-6 text-xl shadow-xl hover:shadow-green-500/30 cta-lift shimmer-effect">
              GARANTIR A MINHA AGORA
            </Button>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Sem pagamento adiantado.</span>
          </div>
        </div>
      </section>

      {/* Offer / Price Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">OFERTA POR TEMPO LIMITADO</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não perca a chance de transformar seus cabelos hoje mesmo. Estoque limitado!
          </p>

          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-100 p-4 text-gray-600 text-sm font-bold uppercase tracking-widest">
              Promoção Especial
            </div>
            <div className="p-8">
              <p className="text-gray-400 line-through text-lg font-medium">De {PRICE_OLD}</p>
              <div className="flex justify-center items-baseline gap-1 my-2">
                <span className="text-gray-500 font-medium">Por apenas</span>
                <span className="text-5xl font-black text-gray-900 tracking-tight">{PRICE_NEW}</span>
              </div>
              <p className="text-green-600 font-bold mb-6 text-sm bg-green-50 inline-block px-3 py-1 rounded-full">
                Economize R$ 60,00 Hoje
              </p>

              <ul className="text-left space-y-3 mb-8 text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> <span className="font-bold text-green-700">Pague somente na entrega</span></li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> <span>Frete Grátis</span></li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> <span>Garantia de Satisfação</span></li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> <span>Envio Imediato</span></li>
              </ul>

              <div className="flex flex-col gap-2">
                <Button 
                  onClick={handleBuyClick} 
                  className="w-full bg-cta-green hover:bg-green-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-green-500/40 shimmer-effect cta-lift"
                >
                  PEDIR AGORA
                </Button>
                <span className="text-xs text-gray-500 font-black uppercase">Sem pagamento adiantado.</span>
              </div>
              <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Compra 100% Segura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm p-2">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="px-4 border-b last:border-0">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 line-through">{PRICE_OLD}</span>
            <span className="text-xl font-bold text-gray-900">{PRICE_NEW}</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1">
            <Button onClick={handleBuyClick} className="w-full bg-cta-green hover:bg-green-700 text-white font-bold shadow-lg shimmer-effect">
              COMPRAR AGORA
            </Button>
            <span className="text-[9px] font-bold text-gray-500 uppercase">Sem pagamento adiantado.</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mb-24 md:mb-0">
        <div className="container mx-auto px-4 text-center">
          <div className="font-display font-bold text-2xl text-white mb-6">
            Escova<span className="text-primary">Alisadora</span>
          </div>
          <p className="mb-8 max-w-md mx-auto text-sm">
            Transformando a rotina de beleza de milhares de mulheres em todo o Brasil. Qualidade, praticidade e segurança.
          </p>
          <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Rastrear Pedido</a>
          </div>
          <div className="border-t border-gray-800 pt-8 text-xs">
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
