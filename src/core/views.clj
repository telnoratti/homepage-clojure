(ns core.views
    (:use postal.core)
    (:use data))

(defn homepage 
    ([]
        (slurp "src/templates/base.html")))

(defn mail-form
    [from subject message]
    (if (re-matches #"([A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})" from)
        (if (<= (.length subject) 128)
            (if (send-message  
                 #^{:host "smtp.gmail.com"
                    :user "bot@winkowski.me"
                    :pass smtp_password
                    :ssl :yes}
                   {:from "bot@winkowski.me"
                    :to ["calvin@winkowski.me"]
                    :subject (apply str ["From: " from " : " subject])
                    :body message})
                "Message Sent!"
                "Error: Unknown failure sending mail.")
            "Error: Subject should be less than 128 ")
        "Error: Invalid email address!"))