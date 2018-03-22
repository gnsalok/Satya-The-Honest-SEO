# -*- coding: utf-8 -*-
import scrapy
from scrapy.selector import HtmlXPathSelector


class CheckfirstSpider(scrapy.Spider):
    name = 'checkfirst'
    allowed_domains = ['tourism.rajasthan.gov.in']
    start_urls = ['http://tourism.rajasthan.gov.in/',
                  'http://tourism.rajasthan.gov.in/ajmer.html',
                  "http://tourism.rajasthan.gov.in/alwar.html",
                  "http://tourism.rajasthan.gov.in/banswara.html",
                  "http://tourism.rajasthan.gov.in/baran.html",
                  "http://tourism.rajasthan.gov.in/barmer.html",
                  "http://tourism.rajasthan.gov.in/bharatpur.html",
                  "http://tourism.rajasthan.gov.in/bhilwara.html",
                  "http://tourism.rajasthan.gov.in/bikaner.html",
                  "http://tourism.rajasthan.gov.in/bundi.html",
                  "http://tourism.rajasthan.gov.in/chittorgarh.html",
                  "http://tourism.rajasthan.gov.in/dausa.html",
                  "http://tourism.rajasthan.gov.in/dholpur.html",
                  "http://tourism.rajasthan.gov.in/dungarpur.html",
                  "http://tourism.rajasthan.gov.in/hanumangarh.html",
                  "http://tourism.rajasthan.gov.in/jaipur.html",
                  "http://tourism.rajasthan.gov.in/jaisalmer.html",
                  "http://tourism.rajasthan.gov.in/jalore.html",
                  "http://tourism.rajasthan.gov.in/jhalawar.html",
                  "http://tourism.rajasthan.gov.in/jodhpur.html",
                  "http://tourism.rajasthan.gov.in/karauli.html",
                  "http://tourism.rajasthan.gov.in/kota.html",
                  "http://tourism.rajasthan.gov.in/mount-abu.html",
                  "http://tourism.rajasthan.gov.in/nagaur.html",
                  "http://tourism.rajasthan.gov.in/pali.html",
                  "http://tourism.rajasthan.gov.in/pushkar.html",
                  "http://tourism.rajasthan.gov.in/rajsamand.html",
                  "http://tourism.rajasthan.gov.in/sawaimadhopur.html",
                  "http://tourism.rajasthan.gov.in/shekhawati.html",
                  "http://tourism.rajasthan.gov.in/sriganganagar.html",
                  "http://tourism.rajasthan.gov.in/tonk.html",
                  "http://tourism.rajasthan.gov.in/udaipur.html",

                  ]

    def parse(self, response):
     #   extractor = LinkExtractor(allow_domains='http://tourism.rajasthan.gov.in/')
        hxs = HtmlXPathSelector(response)

        data_key = hxs.xpath('//meta[@name="keywords"]/@content').extract()
        data_des = hxs.xpath('//meta[@name="description"]/@content').extract()
        data_pro = hxs.xpath('//meta[@property="og:title"]/@content').extract()
       # data_link = hxs.xpath('// li[@class="level"]/a').extract()
       # data_destination = hxs.xpath('//li[2]/ul/li[1]/ul/li/a/span/text()').extract()

        print(data_key, data_des, data_pro)

        for item in zip(data_key, data_des, data_pro):
            # create a dictionary to store the scraped info
            scraped_info = {
                'keywords': item[0],
                'description': item[1],
                'prop': item[2],
               # 'url': item[3],
               # 'destination': item[4]
            }

        yield scraped_info
