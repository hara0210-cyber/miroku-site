import { redirect } from "next/navigation";

// 買取実績ページは削除しました。トップページへリダイレクトします。
export default function ResultsPage() {
  redirect("/");
}
