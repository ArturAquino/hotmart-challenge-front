import React from 'react'

import { useStyles } from './styled'

export default function Description(props) {
	const classes = useStyles()   

	return (
        props &&
		<div style={{margin: '0 auto 0 0'}}>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Nome
				</p>
				<p className={classes.textDescription}>
					{props.nameCollaborator}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					E-mail
				</p>
				<p className={classes.textDescription}>
					{props.emailCollaborator}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Justificativa
				</p>
				<p className={classes.textDescription}>
					{props.justification}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Finalidade
				</p>
				<p className={classes.textDescription}>
					{props.purpose}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Projeto
				</p>
				<p className={classes.textDescription}>
					{props.project}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Data
				</p>
				<p className={classes.textDescription}>
					{props.createdOn}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Quantidade
				</p>
				<p className={classes.textDescription}>
					{props.amountPeople}
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Inclui café da manhã
				</p>
				<p className={classes.textDescription}>
					{props.breakfast}

				</p>
			</div>
		</div>
	)
}
