import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./nav-foot/navbar";
import ContentSection from "./content-section/content-section";
import Footer from "./nav-foot/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LokerWrap from "./loker/loker-wrap";
import LokerDetail from "./loker/loker-detail";
import NotFound from "./404/not-found";
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import SearchForm from "./search/search-form";

function BootCamp(prop) {

  const linkData = 'https://dev-example.sanbercloud.com/api/job-vacancy'

  const [fetchStatus, setFetchStatus] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {

    if (fetchStatus === true) {
      axios.get(linkData)
        .then((res) => {
          let dataReverse = [...res.data.data]
          setData(dataReverse.reverse())
          console.log('BERHASIL', res.data.data)
        })
        .catch((error) => {
          console.log(error)
        })

      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

  let tmplateIntf;
  if (prop.sect === 'main') {
    tmplateIntf = <ContentSection dataFetch={data} />
  }
  if (prop.sect === 'loker') {
    tmplateIntf = (
      <div className="mt-16 p-1">
        <SearchForm />
        <LokerWrap dataFetch={data} posision='-' />
      </div>
    )
  }
  if (prop.sect === 'detail'){
    tmplateIntf = <LokerDetail dataFetch={data} />
  }
  if (prop.sect === 'rekomen'){
    tmplateIntf = <LokerWrap dataFetch={data} posision='-' />  
  }


  return (
    <>
      <div className="h-auto bg-slate-50 p-1">
        <Navbar link={prop.nav} />
        {tmplateIntf}

        <Footer />
      </div>
    </>
  );
}

export default BootCamp;
