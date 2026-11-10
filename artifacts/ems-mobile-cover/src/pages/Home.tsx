import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Star, MapPin, Phone, Clock, ChevronRight, Upload, Type, Printer, Shield, Droplet, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  const collections = [
    { title: "Traditional Ikat", desc: "Classic geometric precision", image: "/images/collection-ikat.png" },
    { title: "Jagannath Collection", desc: "Divine motifs in rich hues", image: "/images/collection-jagannath.png" },
    { title: "Samaleswari", desc: "Cultural pride and heritage", image: "/images/collection-samaleswari.png" },
    { title: "Tribal Art", desc: "Rooted in ancient Dhokra", image: "/images/collection-tribal.png" }
  ];

  const readyStock = [
    "/images/ready-1.png",
    "/images/ready-2.png",
    "/images/ready-3.png",
    "/images/ready-4.png",
    "/images/ready-5.png",
    "/images/ready-6.png"
  ];

  const gallery = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/gallery-5.png",
    "/images/gallery-6.png"
  ];

  const testimonials = [
    { name: "Priya Nayak", role: "Student", text: "The Sambalpuri design on my phone cover looks incredible. The print quality is top-notch and it feels very premium. Proud to show it off!" },
    { name: "Ravi Rath", role: "Software Engineer", text: "Ordered the Jagannath collection case. The deep red and gold colors pop so well. Fast delivery and great customer service via WhatsApp." },
    { name: "Ananya Dash", role: "Photographer", text: "Got the lamination done on my new phone, and the precision is flawless. Plus, I love the Tribal Art cover I bought." },
    { name: "Subhash Panda", role: "Business Owner", text: "We ordered 100 custom cases for our corporate gifting with our logo and subtle Ikat patterns. EMS delivered on time with superb quality." }
  ];

  const IkatPattern = () => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="opacity-10 dark:opacity-20 absolute inset-0 pointer-events-none fill-primary">
      <pattern id="ikat" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M20 10 L30 20 L20 30 L10 20 Z" fill="currentColor"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#ikat)" />
    </svg>
  );

  const SectionDivider = () => (
    <div className="w-full h-12 flex justify-center items-center my-8 text-primary/40">
      <svg width="120" height="20" viewBox="0 0 120 20">
        <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L110 0 L120 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
        <IkatPattern />
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Odisha's Premier Mobile Cover Specialist</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-[1.1] mb-6 tracking-tight">
                Proudly Carry <br />
                <span className="text-primary italic">Odisha</span><br/>
                In Your Pocket
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl font-light">
                Premium Sambalpuri Mobile Covers, Mobile Back Lamination, Custom Printing and Wholesale Solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-none" asChild>
                  <a href="#collections">Explore Designs</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-none border-primary/20 hover:bg-primary/5" asChild>
                  <a href="#customize">Customize Cover</a>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 text-lg h-14 px-8 rounded-none" asChild>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Order
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50"></div>
              <img src="/images/collection-jagannath.png" alt="Featured Cover" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 object-cover rounded-3xl shadow-2xl z-20 border border-white/10 rotate-[-5deg] hover:rotate-0 transition-transform duration-500" onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x800/222/FFF?text=Hero+Image')} />
              <img src="/images/collection-ikat.png" alt="Featured Cover 2" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 object-cover rounded-3xl shadow-2xl z-10 border border-white/10 translate-x-[20%] translate-y-[-10%] rotate-[10deg] opacity-80 blur-[2px]" onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x800/222/FFF?text=Hero+Image')} />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Sambalpuri Collection */}
      <section id="collections" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Sambalpuri Collection</h2>
            <p className="text-muted-foreground text-lg">Wear your heritage. Each design is carefully curated to reflect the rich weaving traditions and art of Odisha.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((c, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                key={i} 
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src={c.image} alt={c.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x533/222/FFF?text=Loading')} />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <Button variant="secondary" className="w-full bg-white text-black hover:bg-primary hover:text-white rounded-none">
                      View Details
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Stock */}
      <section id="ready-stock" className="py-24 bg-background border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">100+ Designs Ready to Ship</h2>
              <p className="text-muted-foreground text-lg">Same Day Dispatch. Pan-India Delivery. Find the perfect cover for your device model instantly.</p>
            </div>
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90">
              Browse All Stock <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {readyStock.map((img, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="aspect-square bg-muted overflow-hidden group"
              >
                <img src={img} alt={`Ready Stock ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => (e.currentTarget.src = 'https://placehold.co/300x300/333/FFF?text=Stock')} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Lamination Studio */}
      <section id="lamination" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Premium Mobile Back Lamination</h2>
              <p className="text-gray-400 text-lg">
                Protect your device without adding bulk. Our precision-cut lamination films offer superior protection while maintaining your phone's original sleek profile.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Scratch-Proof Protection</h4>
                    <p className="text-gray-400">Military-grade material that heals minor scratches over time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Droplet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Water & Smudge Resistant</h4>
                    <p className="text-gray-400">Oleophobic coating repels fingerprints and minor liquid spills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Precision Cut</h4>
                    <p className="text-gray-400">Perfectly aligned with camera bumps and edges for your specific model.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 h-14 px-8 mt-4" asChild>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">Book Lamination Appointment</a>
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
              >
                <img src="/images/lamination-1.png" alt="Lamination Process" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x450/222/FFF?text=Lamination')} />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
              >
                <img src="/images/lamination-2.png" alt="Lamination Result" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x450/222/FFF?text=Lamination')} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Your Own Cover */}
      <section id="customize" className="py-24 bg-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Create Your Own Cover</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Want something truly unique? Turn your memories into a premium mobile cover. Perfect for gifts, corporate branding, or personal use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card p-8 border border-border flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Upload Photo</h3>
              <p className="text-muted-foreground text-sm">Send us your high-resolution image or artwork.</p>
            </div>
            
            <div className="bg-card p-8 border border-border flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <Type className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Add Text</h3>
              <p className="text-muted-foreground text-sm">Include names, quotes, or special dates.</p>
            </div>
            
            <div className="bg-card p-8 border border-border flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <Printer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Get it Printed</h3>
              <p className="text-muted-foreground text-sm">We'll print it on our premium shock-proof cases.</p>
            </div>
          </div>

          <Button size="lg" className="rounded-none bg-[#25D366] hover:bg-[#128C7E] text-white h-14 px-8 text-lg gap-2" asChild>
            <a href="https://wa.me/919999999999?text=Hi! I want to create a custom mobile cover." target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5" />
              Send Design via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Wholesale Partner Program */}
      <section id="wholesale" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-muted relative"
            >
              <img src="/images/wholesale.png" alt="Wholesale Packaging" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/333/FFF?text=Wholesale')} />
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur p-4 border border-border">
                <p className="font-bold text-lg">MOQ: 50 Pieces</p>
                <p className="text-sm text-muted-foreground">Mixed models allowed</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Wholesale Partner Program</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join our network of retailers and distributors. Get exclusive pricing on bulk orders of premium Sambalpuri covers and custom printed cases.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 border border-border bg-background flex justify-between items-center hover:border-primary transition-colors">
                  <div>
                    <h4 className="font-bold">Retailer Tier</h4>
                    <p className="text-sm text-muted-foreground">For small shops (Min. 50 pcs)</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-4 border border-border bg-background flex justify-between items-center hover:border-primary transition-colors">
                  <div>
                    <h4 className="font-bold">Distributor Tier</h4>
                    <p className="text-sm text-muted-foreground">For large volume (Min. 200 pcs)</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="p-4 border border-border bg-background flex justify-between items-center hover:border-primary transition-colors">
                  <div>
                    <h4 className="font-bold">Brand Partner</h4>
                    <p className="text-sm text-muted-foreground">Custom branding & white labeling</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              
              <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 h-14 px-8" asChild>
                <a href="https://wa.me/919999999999?text=I am interested in the Wholesale Partner Program" target="_blank" rel="noreferrer">
                  Request Wholesale Catalog
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section id="stories" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Odishan Pride, Customer Joy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-card p-8 border border-border/50 relative"
              >
                <div className="text-4xl text-primary/20 font-serif absolute top-4 right-6">"</div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed text-foreground/80">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold font-serif text-muted-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-4 bg-background overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap gap-4 px-4 h-[300px] md:h-[400px]">
          {gallery.slice(0, 4).map((img, i) => (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              key={i}
              className={`relative overflow-hidden group ${i === 0 || i === 3 ? 'w-full md:w-1/3' : 'w-full md:w-1/4'} h-full flex-shrink-0 bg-muted`}
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x600/333/FFF?text=Gallery')} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Store Location & Footer */}
      <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 border-t-[4px] border-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <span className="text-3xl font-bold font-serif tracking-tight text-primary block mb-4">
                Odisha <span className="text-white">Cover Studio</span>
              </span>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                Odisha's premier destination for culturally inspired, premium mobile covers and expert lamination services. Carry your heritage with pride.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  IG
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  FB
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#collections" className="hover:text-primary transition-colors">Sambalpuri Collection</a></li>
                <li><a href="#lamination" className="hover:text-primary transition-colors">Lamination Studio</a></li>
                <li><a href="#customize" className="hover:text-primary transition-colors">Custom Printing</a></li>
                <li><a href="#wholesale" className="hover:text-primary transition-colors">Wholesale Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>EMS Mobile Cover<br/>Bhubaneswar, Odisha, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 99999 99999</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Odisha Cover Studio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with pride in Odisha.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
