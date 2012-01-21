(defproject clojure-heroku "0.0.2"
  :description "Calvin's Site"
  :dependencies
    [[org.clojure/clojure "1.2.1"]
     [ring/ring-jetty-adapter "0.3.9"]
     [compojure "0.6.4"]
     [com.draines/postal "1.7-SNAPSHOT"]]
  :dev-dependencies [[lein-ring "0.4.5"]]
  :ring {:handler core.routes/app})
