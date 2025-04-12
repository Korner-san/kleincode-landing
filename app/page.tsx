import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Palette, Target, Briefcase, Smartphone, ChevronLeft, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-purple-500/20 p-2 rounded-full">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-silver-300 bg-clip-text text-transparent">
              KC
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-silver-300 bg-clip-text text-transparent">
            KleinCode
          </h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
            שירותים
          </Link>
          <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
            תיק עבודות
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            המלצות
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            צור קשר
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:flex border-purple-500 text-white hover:bg-purple-500/20 transition-all duration-300"
        >
          התחל פרויקט
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
            דפי נחיתה שמושכים תשומת לב ומייצרים תוצאות
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            אנחנו בונים דפי נחיתה מושלמים וממירים לפרסום, יצירת לידים ונוכחות מקוונת
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none px-8 py-6 text-lg group transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]">
              <span>קבל דף נחיתה עכשיו</span>
              <ChevronLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 text-lg transition-all duration-300"
            >
              צפה בדוגמאות
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="container mx-auto py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
            השירותים שלנו
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            אנחנו מתמחים ביצירת חוויות דיגיטליות מרהיבות שמושכות לקוחות ומגדילות המרות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="h-10 w-10 text-purple-400" />,
              title: "דפי נחיתה לקמפיינים",
              description: "דפים ממוקדים להמרה גבוהה עבור קמפיינים בפייסבוק, גוגל ופלטפורמות אחרות",
            },
            {
              icon: <Briefcase className="h-10 w-10 text-purple-400" />,
              title: "פורטפוליו עסקי",
              description: "הצגת העבודות והשירותים שלך בצורה מקצועית ומרשימה",
            },
            {
              icon: <Palette className="h-10 w-10 text-purple-400" />,
              title: "עמוד שירותים",
              description: "הצגת השירותים שלך בצורה ברורה ומושכת",
            },
            {
              icon: <Smartphone className="h-10 w-10 text-purple-400" />,
              title: "נוכחות דיגיטלית",
              description: "פתרון מתקדם לנוכחות דיגיטלית, בדומה ל-Linktree אך ברמה פרימיום",
            },
            {
              icon: <MessageCircle className="h-10 w-10 text-purple-400" />,
              title: "יצירת לידים",
              description: "דפים ייעודיים ליצירת לידים ואיסוף פרטי התקשרות",
            },
            {
              icon: <Target className="h-10 w-10 text-purple-400" />,
              title: "דפי מכירות",
              description: "דפי מכירות ארוכים המתוכננים להמרה גבוהה ומכירות",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/10 group-hover:to-purple-600/20 transition-all duration-500"></div>
              <div className="absolute h-px w-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent bottom-0 left-0 right-0 mx-auto group-hover:w-full transition-all duration-700"></div>

              <CardContent className="p-6 relative z-10">
                <div className="bg-purple-900/30 p-3 rounded-lg w-fit mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
            תיק העבודות שלנו
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">הצצה לפרויקטים האחרונים שלנו</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-800">
              <Image
                src={`/placeholder.svg?height=600&width=800`}
                alt={`פרויקט ${item}`}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">פרויקט לדוגמה {item}</h3>
                <p className="text-gray-300">דף נחיתה לקמפיין פרסומי</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 text-lg transition-all duration-300"
          >
            צפה בכל העבודות
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
              הלקוחות שלנו
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">מה אומרים עלינו הלקוחות שעבדו איתנו</p>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[1, 2, 3, 4, 5].map((logo) => (
              <div key={logo} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg">
                <Image
                  src={`/placeholder.svg?height=60&width=120`}
                  alt={`לוגו לקוח ${logo}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "דניאל לוי",
                company: "חברת טכנולוגיה בע״מ",
                text: "העבודה עם KleinCode הייתה חוויה מעולה. הם הבינו בדיוק את הצרכים שלנו ויצרו דף נחיתה שהגדיל את ההמרות שלנו ב-150%.",
              },
              {
                name: "מיכל כהן",
                company: "סטארטאפ חדשני",
                text: "הצוות המקצועי של KleinCode עזר לנו ליצור נוכחות דיגיטלית מרשימה שמושכת לקוחות חדשים ומייצרת לידים איכותיים.",
              },
              {
                name: "יוסי אברהם",
                company: "עסק מקומי",
                text: "דף הנחיתה שKleinCode בנו עבורנו הוא פשוט מדהים. הוא לא רק נראה מצוין אלא גם מביא תוצאות עסקיות אמיתיות.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:to-purple-600/10 transition-all duration-500"></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 flex-grow mb-4">{testimonial.text}</p>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-purple-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="container mx-auto py-20 relative">
        <div className="bg-gradient-to-br from-gray-900 via-purple-950/50 to-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
                מוכנים להתחיל?
              </h2>
              <p className="text-gray-300 text-lg">צרו איתנו קשר היום ונבנה יחד את דף הנחיתה המושלם לעסק שלכם</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none px-8 py-6 text-lg group transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]">
                <span>התחל פרויקט</span>
                <ChevronLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 text-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                צור קשר בוואטסאפ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="bg-purple-500/20 p-2 rounded-full">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-silver-300 bg-clip-text text-transparent">
                  KC
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-silver-300 bg-clip-text text-transparent">
                KleinCode
              </h2>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                שירותים
              </Link>
              <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                תיק עבודות
              </Link>
              <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                המלצות
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                צור קשר
              </Link>
            </nav>

            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} KleinCode. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 