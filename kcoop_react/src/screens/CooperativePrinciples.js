import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function CooperativePrinciples() {
  return (
    <div className="content-wrapper" style={{minHeight: '427px'}}>
        <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17.5px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-12 pull-left">
                  <h2><b>
                  <FontAwesomeIcon icon={faUserGroup} /> 
                     &nbsp;Who We Are</b></h2>
                  <br />
                  <div id={4} />
                  <div>
                    <div className="box box-warning ">
                      <div className="box-header" style={{marginTop: '0%'}}>
                      <FontAwesomeIcon icon={faCircleDot} color='orange' size='1.5x'/>
                        <h2 className="box-title"><b>COOPERATIVE PRINCIPLES</b></h2>
                        <div className="box-body" style={{marginLeft: '3%', marginRight: '3%'}}>
                          <p />
                          <p style={{textAlign: 'justify'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cooperatives like K-Coop are purely voluntary entities that are open to everyone – without any restrictions as to gender, social, racial, political, or religious characteristics or affiliations – who wish to avail of and use its services, and willing to accept the duties and responsibilities of membership. K-Coop members and officers are required to abide by the following basic cooperative principles:</p>
                          <p><strong>Voluntary and open membership</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Membership in K-Coop is voluntary and should involve no form of coercion. K-Coop membership is open to all, without any form of discrimination with regard to gender, race, religion, or social status.
                          </p>
                        
                          <p  style={{textAlign: 'justify'}}><strong>Democratic control by members</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cooperatives like K-Coop are democratic entities wherein rights of members to participate in decision-making and policy formulation are recognized and actively encouraged. Members have equal voting rights (one member, one vote), and elected cooperative officers and appointed officials are held accountable to the membership through systems of regular reporting, system audits and reviews, and internal controls.
                          </p>
                          <p style={{textAlign: 'justify'}}><strong>Members? economic participation</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;K-Coop members contribute equally to its capital which is held or owned commonly. Surpluses from operations are usually allocated and distributed to various uses including the setting up of reserve funds, supporting different programs that benefit members, their families and&nbsp;communities, and the public, and providing refunds and/or some form of returns for patronizing the available products and services of the cooperative.
                          </p>
                          <p style={{textAlign: 'justify'}}><strong>Autonomy and independence</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Cooperatives are autonomous, self-help organizations. This fact does not limit them from entering partnerships or collaborative agreements with other organizations or cooperatives. The coop’s officers should ensure though that members’ interest and the coop’s independence are not sacrificed or set aside when establishing such linkages.
                          </p>
                          
                          <p style={{textAlign: 'justify'}}><strong>Education, training, and information</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;K-Coop maintains an active program for educating and training its members, officers, managers, and staff to enhance their competencies and commitment to the coop and thus contribute effectively to its development. The coop also disseminates information aimed at raising the public’s awareness on the benefits of cooperatives.
                          </p>
                          
                          <p style={{textAlign: 'justify'}}><strong>Cooperation among cooperatives</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;K-Coop recognizes the value of linking with other cooperatives in terms of enhancing its services to members via sharing of knowledge and good practices, and further promoting cooperative principles. It is committed to establish its linkages with local, national, regional, and even global networks of cooperatives for such purposes.
                          </p>
                          
                          <p style={{textAlign: 'justify'}}><strong>Concern for community</strong><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Apart from serving the interests and needs of its members and client-beneficiaries, cooperatives like K-Coop also aim to contribute to the development of their communities, which include non-members, via policies and programs approved by members. This is recognition of the role that community support plays in the coop’s success.
                          </p>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /. box */}
                </div>
                {/* /.box */}
              </div>
              {/* /.col */}
              {/* /.row */}
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
    </div>
  )
}
