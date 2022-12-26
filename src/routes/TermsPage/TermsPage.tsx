import { ReactElement } from 'react'
import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import {
    B,
    ContentWrapper,
    Date,
    Li,
    Link,
    Ol,
    Paragraph,
    RedMessage,
    Section,
    Title,
    TitleSection,
  } from '../styles/legalPagesStyles'

function TermsPage(): ReactElement {

  return (
    <Page>
      <Block>
        <ContentWrapper>
            <Title>Terms and Service</Title>
            <Date>Last updated on December, 2022</Date>
            <RedMessage>
                This Terms of Service (the "Agreement") are a legal agreement between you
                ("User", "you", "your" or "yours") and Klaytn Foundation Limited ("Klaytn", "we", "our" or "us").
                We are a company registered in Singapore. You can contact us by writing to &nbsp; 
                <Link href="mailto:contact@klaytn.foundation">contact@klaytn.foundation</Link>.
            </RedMessage>
            <Section>
                <TitleSection>
                    1. What is Klaytn Safe ?
                </TitleSection>
                Klaytn Safe is a multi-sig wallet for the Klaytn ecosystem. 
                It is a fork of the well-known multi-sig wallet Gnosis Safe. 
                <br/>The following are the benefits of Klaytn Safe.

                <Ol style={{ listStyleType: 'lower-alpha' }}>
                <Li>
                    <b>Store and Transfer KLAY, KCTs (KIP7, KIP13):</b> Users can deposit your virtual assets 
                    such as KLAY and Klaytn Compatible Tokens (KCTs, fungible or non-fungible) to a KSafe address 
                    and also transfer to a destination address.
                </Li>
                <Li>
                    <b>Security:</b> Assets in your KSafe wallet are highly secured, because the confirmation threshold 
                    gives users the liberty to decide which transaction should be executed, so you don't have to worry 
                    about one owner running off with the asset.
                </Li>
                <Li>
                    <b>Safe Apps:</b>  KSafe's functionality is expanded by the addition of custom apps that enable 
                    batch transactions and interaction with other dApps. One example of this safe app is 
                    the Transaction Builder. With a transaction builder, you don't have to worry about executing 
                    sets of transactions one after another. This batch transactions feature allows for transactions 
                    to be combined and executed at a click.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                    2. Term
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                    "KSafe" or "Services" refers to the Klaytn Safe services, the Klay Safe, provided by Klaytn, 
                    whether through <Link href="https://klaytn.foundation/"> Klaytn Foundation</Link> website any 
                    associated website, API, or mobile application related, linked or otherwise connected thereto. 
                    You may use the Services by accessing the <Link href="https://safe.klaytn.foundation"> KSafe</Link> website 
                    and connecting your blockchain wallet such as Kaikas. For the avoidance of doubts, all content and 
                    functionality on the Services is the exclusive property of Klaytn or its licensors and is protected 
                    by applicable laws. Klaytn hereby grants you a limited, non-exclusive, non-transferable, revocable 
                    license pursuant to Section 8 herein to use the Services solely for your own benefit, provided that 
                    you comply with this Agreement. Nothing on this Services should be construed as granting directly 
                    or indirectly or by implication any license or right to use any Klaytn intellectual property other 
                    than as expressly set forth herein. All rights not expressly granted are reserved.
                </Li>
                <Li>
                    By using any Services offered by us, you agree that you have read, understood, and accept all of 
                    the terms and conditions contained in this Agreement, including the &nbsp; 
                    <Link href="https://docs.klaytn.foundation/misc/terms-of-use">terms of use</Link> of Klaytn website and 
                    the <Link href="https://klaytn.foundation/privacy/">privacy policy</Link> of Klaytn website 
                    incorporated herein by reference, as amended from time to time (Agreement and terms of use and privacy 
                    policy of Klaytn website collectively referred to as the "Terms of Use" ). 
                    <b>IF YOU DO NOT AGREE WITH ALL OR PART OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM 
                    USING KSAFE AND MUST STOP OR DISCONTINUE USING THE SERVICES IMMEDIATELY</b>.
                </Li>
                <Li>
                    You may easily find this Agreement on the Services screen. Each time you use KSafe you will be bound by 
                    the Agreement in force at that time. From time to time, we may change this Agreement.  We will publish 
                    those changes on <Link href="https://safe.klaytn.foundation"> KSafe</Link> website seven (7) days prior 
                    to the enforcement date of the amended terms of the Agreement and you will be bound by the amended Agreement 
                    at the time you use KSafe after such enforcement date. For your benefit, if any of the amended terms may 
                    materially affect your use of KSafe, we will make notice of such changes thirty (30) days prior to the 
                    enforcement date. If you do not agree to those changes, you must not use KSafe. You can always ask us 
                    about the Agreement in effect at the time of your access to the KSafe by writing to 
                    &nbsp; <Link href="mailto:partnership@klaytn.foundation">partnership@klaytn.foundation</Link>. Every time you wish 
                    to use KSafe, please check and ensure that you agree with the latest updated version of the Agreement. 
                    Any failure to check the Agreement or object to the Agreement by not using the Services shall be your 
                    responsibility. 
                </Li>
                <Li>
                    The information provided on the Services is not intended for distribution to or use by any person or 
                    entity in any jurisdiction or country where such distribution or use would be contrary to law or 
                    regulation or which would subject us to any registration requirement within such jurisdiction or country. 
                    Accordingly, those persons who choose to access the Services do so on their own initiative and are solely 
                    responsible for compliance with local laws, if and to the extent local laws are applicable.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                    3. User Representations
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                    By using the KSafe, you represent and warrant that: (1) you are 19 years of age or older, you have legal 
                    capacity, and you agree to comply with these Terms of Use; (2) you will not access the KSafe through automated 
                    or non-human means, whether through a bot, script, or otherwise; (3) you will not use KSafe for any illegal 
                    or unauthorized purpose; and (4) your use of KSafe will not violate any applicable law or regulation.
                </Li>
                <Li>
                    If any of the information you provided is untrue, inaccurate, not current, or incomplete, Klaytn has the 
                    right to suspend or terminate your account and refuse any and all current and future use of KSafe.
                </Li>
                <Li>
                    The obligation to manage your wallet information shall be borne by you and you shall not allow a third 
                    person to use such information or use the same for the purpose of lease, transfer, collateral, etc. 
                    You shall be liable for all disadvantages caused by a breach of this section or the third person's 
                    wilful misconduct or negligence.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                    4. What you agree to and warrant ?
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                    By using KSafe you hereby agree, and warrant that:
                    <Ol style={{ listStyleType: 'lower-alpha' }}>
                        <Li>
                            You are of 19-year-old age or older and you agree to provide documentation providing such status 
                            if requested or required by Klaytn. 
                        </Li>
                        <Li>
                        You have read and understood this Agreement and agree to be bound by the Terms of Use.
                        </Li>
                        <Li>
                        Your usage of KSafe is legal under the laws of your jurisdiction or under the laws or regulation, including, without limitation, any applicable export control laws.
                        </Li>
                        <Li>
                        You will comply with any applicable tax obligations in your jurisdiction arising from your use of KSafe.
                        </Li>
                        <Li>
                        You understand the functionality, usage, storage, transmission mechanisms and intricacies associated with assets as well as blockchain technology and blockchain-based software systems.
                        </Li>
                        <Li>
                        You understand and agree that transactions on Klaytn blockchain are irreversible and may not be erased, that your KSafe address and transactions are displayed permanently and publicly and that you relinquish any right of rectification or erasure of your data.
                        </Li>
                        <Li>
                        You will not misuse or gain unauthorized access to KSafe by knowingly inserting viruses, cross-site scripting, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer program designed to negatively affect KSafe and that in the event you do so or otherwise attack KSafe, we reserve the right to report any such activity to the relevant law enforcement authorities and we will take full measures to cooperate with those authorities as required.    
                        </Li>
                        <Li>
                        You will not use our KSafe to store, trade or transmit assets that are proceed of criminal or fraudulent activity.
                        </Li>
                        <Li>
                        You will not interfere with the normal provision of the Services by Klaytn by using the Services in ways other than those provided by Klaytn (automatic access program, etc.).
                        </Li>
                        <Li>
                        You will not use KSafe for activities for unlawful or fraudulent or have such purpose of effect or otherwise support any activities that breach local, national or international regulation or law.
                        </Li>
                        <Li>
                        You will not tarnish the reputation or disrupt the business of Klaytn, Services and other third parties.
                        </Li>
                        <Li>
                        You understand that KSafe is in early development stage, and we accordingly do not guarantee a 100% error-free process and give no price or liquidity guarantee.
                        </Li>
                        <Li>
                        You are using KSafe at your own risk.
                        </Li>
                    </Ol>
                    <Li>
                    You will make a joint effort toward smooth Service operation and a sound online community culture.
                    </Li>
                    <Li>
                    You agree to notify us of bugs, system errors, defects, etc., found in the course of using the Services, and shall not disseminate the same to other user or misuse them.
                    </Li>
                    <Li>
                    You shall have an obligation to faithfully respond to our inquiries into whether you use illegal programs, macro programs or in a manner prohibited in this Agreement.
                    </Li>
                    <Li>
                    You shall be responsible for managing their accounts on PCs and mobile devices. We shall not be responsible for any losses caused by the management of Members' accounts, PCs, mobile devices and other various authentication tools or by allowing another person to use the same.
                    </Li>
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                    5. What licenses and access do we grant to you ?
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                We license but do not sell to you the Services you download solely for your own personal, non-commercial use. If you are a business user, we license but do not sell to you the Services you download to use solely for your own internal business use.
                </Li>
                <Li>
                The Services may contain code, commonly referred to as open-source software, which is distributed under open-source license terms, including terms which allow the free distribution and modification of the relevant software's source code and/or which require all distributors to make such source code freely available upon request, including any contributions or modifications made by such distributor ("Open-Source Software"). To the extent that the Services contain any Open-Source Software, that element only is licensed to you under the relevant license terms of the applicable third party licensor ("Open-Source License Terms") and not under this Agreement, and you accept and agree to be bound by such Open-Source License Terms.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                6. What can you expect from the Services and can we make changes to them ?
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                Except as set out in this Agreement, we do not warrant, represent or guarantee that the Services will be accurate, complete, correct, reliable integer, fit for purpose, secure or free from weaknesses, vulnerabilities or bugs.
                </Li>
                <Li>
                To the fullest extent permitted by law, we provide the Services to you "as is" and "as available", "with all faults" basis and without any warranty, representation or assurance (whether express or implied) in relation to merchantability, fitness for a particular purpose, availability, security, title or non-infringement.
                </Li>
                <Li>
                We may temporarily suspend the provision of the Services in the event of maintenance, replacement and breakdown of information and communication facilities such as computers, communication failure or other significant operational reasons. In such a case, we will notify you of this fact by publishing the notice on the Services screen; provided, however, we may provide such notification after the fact when it has an inevitable reason for failing to do so.
                </Li>
                <Li>
                We may conduct regular inspections when necessary for the provision of the Services, and the time of such inspections shall be published on the Services screen. In the event of a regular inspection, there may be restrictions on the use of the Services, in whole or in part, and we shall not be held liable for any damage caused thereby unless such damage is caused by our wilful misconduct or gross negligence.
                </Li>
                <Li>
                We reserve the right to change the format and features of the Services by making any updates to Services available for you to download or, where your device settings permit it, by automatic delivery of updates.
                </Li>
                <Li>
                You are not obliged to download the updated Services, but we may cease to provide and/or update prior versions of the Services and, depending on the nature of the update, in some circumstances you may not be able to continue using the Services until you have downloaded the updated version.  You shall be solely responsible for any failure to timely upload or update the Services and we shall not be held liable for any damage caused thereby unless such damage is caused by our wilful misconduct or gross negligence.
                </Li>
                <Li>
                We shall not be held liable for any problems that cause restrictions on the use of certain functions of the Services due to disruptions in services provided by third parties in relation to the Services or inspections, etc., unless such problems are caused by our wilful misconduct or gross negligence. In such a case, we will announce or notify you of such fact.
                </Li>
                <Li>
                We may cease to provide and/or update content to the Services, with or without notice to you, if it improves the Services we provide to you, or we need to do so for security, legal or any other reasons.
                </Li>
                <Li>
                We may provide various information or notifications deemed necessary in the course of your use of the Services through pop-up appearing on the Services screen or other reasonable means; provided, however, that you may, at any given time, refuse to receive information, except for transaction-related information pursuant to applicable law and responses to customer inquiries, etc.
                </Li>
                <Li>
                We may publish advertisements on the Services screen. Users who have received such advertisements may express their intention to refuse to receive such transmissions from us.
                </Li>
                <Li>
                We are not liable for any losses incurred by you as a result of your failure to update and download the updated version of the Services.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                7. What about third-party risk and the terms of third-party platform providers and application stores ?
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                KSafe relies in part on third party and open-source software, including the Klaytn blockchain, and the continued development and support by third parties. There is no assurance or guarantee that those third parties will maintain their support of their own software or that open-source software will continue to be maintained. This may have a material adverse effect on KSafe.
                </Li>
                <Li>
                WE DO NOT WARRANT THAT THE DATA, SOFTWARE, FUNCTIONS, OR ANY OTHER INFORMATION OFFERED ON OR THROUGH OUR SERVICES WILL BE UNINTERRUPTED, UPDATED OR FREE OF ERRORS OF FACT OR OMISSIONS, VIRUSES OR OTHER HARMFUL COMPONENTS AND DO NOT WARRANT THAT ANY OF THE FOREGOING WILL BE CORRECTED. WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE SERVICES IN TERMS OF CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
                </Li>
                <Li>
                YOU UNDERSTAND AND AGREE THAT IF YOU USE, ACCESS, DOWNLOAD, OR OTHERWISE OBTAIN INFORMATION, MATERIALS, OR DATA THROUGH OUR SERVICES, THE SAME SHALL BE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM AND/OR OTHER DEVICE) OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OR USE OF SUCH MATERIAL OR DATA.
                </Li>
                <Li>
                KSAFE MAY INCLUDE CONTENT, MATERIAL, LINKS OR SERVICES INCLUDING WITHOUT LIMITATION THIRD PARTY WEBSITES, APPS OR DAPPS FROM THE THIRD-PARTY (COLLECTIVELY, "THIRD PARTY SERVICES"). SUCH THIRD PARTY SERVICES ARE PROVIDED FOR USERS' CONVENIENCE AND WE SHALL NOT GUARANTEE THE SAFETY, LEGALITY OR SUSTAINABILITY OF SUCH THIRD PARTY SERVICES. WE ARE NOT RESPONSIBLE FOR THE MAINTENANCE AND MANAGEMENT OF THIRD PARTY SERVICES OR MATERIALS REFERENCED FROM THIRD PARTY SERVICES, AND PROVIDE NO GUARANTEE OF ANY KIND REGARDING THIRD PARTY SERVICES.
                </Li>
                <Li>
                WE SHALL NOT BE HELD LIABLE FOR ANY DAMAGES, LOSSES OR OTHER IMPACT, DIRECTLY OR INDIRECTLY CAUSED BY THE USE OF THIRD PARTY SERVICES THAT ARE NOT BELONGED TO US.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                8. What about our liability to you ?
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                To the fullest extent permitted by applicable laws, in no event shall we be liable for any losses, including any loss of your asset (including without limitation, KLAY, KCTs or any other virtual assets either tangible or intangible) or any indirect or consequential losses, or for any loss of profit, revenue, contracts, data, goodwill or other similar losses.
                </Li>
                <Li>
                We are neither aware of purposes of your use of Services nor willing to involve in your use of the Service for a certain purpose, unless such use is in accordance with this Agreement or the Terms of Use or any applicable law. You understand and accept that you use the Services at your own risk.
                </Li>
                <Li>
                We are neither aware of purposes of your use of Services nor willing to involve in your use of the Service for a certain purpose, unless such use is in accordance with this Agreement or the Terms of Use or any applicable law. You understand and accept that you use the Services at your own risk.
                </Li>
                <Li>
                Where we are operating in conjunction with third parties and/or any other third-party systems (collectively, "Third Party Activity"), we are not responsible for any loss as a result of such Third Party Activity. If your use of Services, including any transaction or transmission, as a result of your actions or those of a third party, mistakenly or fraudulently signed for using your private key, we are not liable.
                </Li>
                <Li>
                We shall not be held liable for any damages incurred by you when it is unable to provide the Services for any one of the following reasons:  <br/>
                    <Ol style={{ listStyleType: 'lower-alpha' }}>
                        <Li>
                            A force majeure event or a state equivalent thereto beyond the control of the Klaytn.
                        </Li>
                        <Li>
                            Damages caused by false or inaccurate information provided by you.
                        </Li>
                        <Li>
                            Disruption to Service use or damages incurred due to causes attributable to you or users.
                        </Li>
                        <Li>
                            Damages incurred by an infringement of a third party's intellectual property rights caused by your actions.
                        </Li>
                        <Li>
                            Other reasons where there is no willful misconduct or gross negligence on the part of the Klaytn.
                        </Li>
                    </Ol>
                </Li>
                <Li>
                We shall not be liable whatsoever for any disadvantages, damages or losses incurred by you due to any transaction between users or between users and a third party where the Services were used as a medium, unless caused by our gross negligence or willful misconduct.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                9. Privacy Policy
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                    We do not collect or use your personal information in the course of providing the Services and KSafe does not require your personal information for your access to the Services. You will only need to connect your blockchain wallet without providing any personal information.
                </Li>
                <Li>
                    Notwithstanding the foregoing, we care about data privacy and security. Please review Klaytn's privacy policy on <Link href="https://klaytn.foundation/privacy/">https://klaytn.foundation/privacy/</Link>. By using KSafe, you are agreeing to be bound by Klaytn privacy policy, which is incorporated into the Terms of Use.
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>
                10. Term and Termination
                </TitleSection>
                <Ol style={{ listStyleType: 'decimal' }}>
                <Li>
                    The Terms of Use Shall remain in full force and effect while you are using the KSafe. Without limiting any other provision of the Terms of Use, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the KSafe, to any person for any reason or for no reason, including without limitation for breach of any representation, warranty contained in this Agreement or any terms in the Terms of Use of any applicable law or regulation.
                </Li>
                <Li>
                    You may terminate this Agreement at any given time by not using this Services or by requesting termination to the contact information provided herein. All benefits acquired through the use of the Services shall expire upon termination of this Agreement. You shall be solely responsible for moving or securing any assets within your KSafe before your termination and we shall neither be held liable for or obligated to compensate for such loss.
                </Li>
                <Li>
                    We may terminate your use or participation of KSafe or delete any content or information that you posted at any time, in our sole discretion, for any of the following reasons:
                    <Ol style={{ listStyleType: 'lower-alpha' }}>
                        <Li>
                            When you cause interruption upon the operation of the Services by your willful misconduct or negligence.
                        </Li>
                        <Li>
                            When there is a breach of this Agreement or any part of the Terms of Use.
                        </Li>
                        <Li>
                            When such restriction or suspension is inevitable due to inspection and maintenance of Service-related facilities or construction.
                        </Li>
                        <Li>
                            When normal Service provision is impossible due to facility maintenance or inspection, etc., of facilities-based telecommunications business entities.
                        </Li>
                        <Li>
                            When there is a disruption in Service use due to national emergencies, power outage, equipment failure or excessive traffic.
                        </Li>
                        <Li>
                            When the we recognize that it is inappropriate to continue the provision of the Services for other reasons.
                        </Li>
                    </Ol>
                </Li>
                </Ol>
            </Section>
            <Section>
                <TitleSection>11. Dispute Resolution</TitleSection>
                <Paragraph>
                    This Agreement shall be prescribed and implemented in accordance with the laws of the Republic of Singapore excluding any principles of conflict of lawsand courts of Singapore shall have exclusive jurisdiction over any disputes between you and Klaytn with regard to the use of the Services. If there is any conflict between Klaytn website terms of use and this Agreement, this Agreement shall prevail.
                </Paragraph>
            </Section>
            <Section>
                <TitleSection>
                    12. Contact Us
                </TitleSection>
                Klaytn Foundation Limited. <br/>
                <Link href="mailto:contact@klaytn.foundation">contact@klaytn.foundation</Link>
            </Section>
        </ContentWrapper>
      </Block>
    </Page>
  )
}

export default TermsPage