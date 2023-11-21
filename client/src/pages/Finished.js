import React from "react";
import { Link } from "react-router-dom";

const Finished = () => {
    return (
        <div className="container-fluid">
            <section className="py-11">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="progress_bar">
                            <div className="border-top"></div>
                            <div>
                                <div>
                                    <small>1</small>
                                </div>
                                <p>填寫購買資料</p>
                            </div>
                            <div>
                                <div className="bg-linear border-0">
                                    <small className="text-dark">2</small>
                                </div>
                                <p>確認付款資訊</p>
                            </div>
                            <div>
                                <div className="bg-linear border-0">
                                    <small className="text-dark">3</small>
                                </div>
                                <p>成功註冊課程</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-sm-8 col-lg-4 px-8 py-12 bg-third bg-opacity-10 d-flex flex-column align-items-center">
                            <div className="d-flex align-items-center mb-8">
                                <span class="material-symbols-outlined text-primary me-3" style={{fontSize: "2.75rem", transform: "translateY(-10%)"}}>
                                    new_releases
                                </span>
                                <h3 className="text-white fw-bold fs-4">完成訂購</h3>
                            </div>
                            <p className="mb-10 text-white">恭喜您已完成<span className="fw-bold">「2023 Python 全攻略｜從入門到實務」</span>課程報名，請注意郵件訊息，家教老師將與您聯繫！</p>
                            <Link className="btn bg-linear text-white px-12 py-2" to="/class">看看其它課程</Link>
                        </div>

                        {/* <form action="/return" method="post">
                            <input type="hidden" name="CustomField1" value="" />
                            <input type="hidden" name="CustomField2" value="" />
                            <input type="hidden" name="CustomField3" value="" />
                            <input type="hidden" name="CustomField4" value="" />
                            <input type="hidden" name="MerchantID" value="2000132" />
                            <input type="hidden" name="MerchantTradeNo" value="test1684501999793" />
                            <input type="hidden" name="PaymentDate" value="2023/05/19 21:13:40" />
                            <input type="hidden" name="PaymentType" value="WebATM_TAISHIN" />
                            <input type="hidden" name="PaymentTypeChargeFee" value="10" />
                            <input type="hidden" name="RtnCode" value="1" />
                            <input type="hidden" name="RtnMsg" value="交易成功" />
                            <input type="hidden" name="SimulatePaid" value="0" />
                            <input type="hidden" name="StoreID" value="" />
                            <input type="hidden" name="TradeAmt" value="100" />
                            <input type="hidden" name="TradeDate" value="2023/05/19 21:13:20" />
                            <input type="hidden" name="TradeNo" value="2305192113200629" />
                            <input type="hidden" name="CheckMacValue" value="46300C00739FCBBAEF33EE1CF7EF26212ED94C6DE82E8B6769E163AA2571D2D8" />
                            <button type="submit" >Submit</button>
                        </form> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Finished;