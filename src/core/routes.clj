(ns core.routes
  (:use compojure.core
        ring.adapter.jetty
        core.views)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]))

(defroutes main-routes
  (GET "/" [] (homepage))
  (POST "/email" [from subject message] (mail-form from subject message))
  (GET "/email-link" _ 
    {:status 302
      :headers {"Location" "mailto:calvin@winkowski.me"}})
  (route/resources "/media/")
  (route/not-found "<h1>404</h1><h2>Page not found!</h2>"))

(def app
  (-> (handler/site main-routes)))


(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
  (run-jetty app {:port port})))
