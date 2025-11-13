import ArticleDetail from "@/components/sections/ArticleDetail";
import Header from "@/components/sections/Header";
import FooterSection from "@/components/sections/FooterSection";

export default function NewsroomArticle() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <ArticleDetail />
      </div>
      <FooterSection />
    </main>
  );
}
