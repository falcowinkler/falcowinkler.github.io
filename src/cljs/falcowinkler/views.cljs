(ns falcowinkler.views
  (:require))

(def available-courses ["python_beginner_1"])

(defn main-panel []
  [:div
   [:h1 "Wilkommen beim python crashkurs"]
   [:a {:href "https://ti.to/moinworld/python-lernen-hamburg"}
    [:p "Anmeldung Teil 1 (ohne Vorkenntnisse)"]]
   [:a {:href "https://ti.to/moinworld/python-class-hamburg"}
    [:p "Anmeldung Teil 2 (Vorraussetzung abgeschlossener Teil 1 oder Vorkenntnisse)"]]
   [:a {:href "https://moinworldhamburg.slack.com"}
    [:p "Alle infos in Slack"]]
   [:ul {:class "list-group"}
    (for [course available-courses]
      [:li {:class "list-group-item"}
       [:a
        {:href (str "https://github.com/falcowinkler/python-course/raw/master/" course ".zip")}
        (str "Download " course)]])]])